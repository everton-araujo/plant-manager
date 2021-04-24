import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import waterDrop from '../../../assets/waterdrop.png';

import { PlantProps, loadPlant, removePlant } from '../../../libs/storage';
import { Header } from '../../../components/header/Header.component';
import { Load } from '../../../components/load/Load.component';
import { PlantCardDetails } from '../../../components/plant/PlantCardDetails.component';

import {
  Container,
  SpotLight,
  SpotLightImage,
  SpotLightText,
  Plants,
  PlantText,
  PlantList
} from './MyPlants.style';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>();

  function handleRemovePlantCard(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🤗',
        style: 'cancel'
      },
      {
        text: 'Sim 😥',
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setMyPlants((oldData) => (
              oldData.filter((item) => item.id !== plant.id)
            ));

          } catch (err) {
            Alert.alert('Não foi possível remover');
          }
        }
      }
    ])
  }

  useEffect(() => {
    async function loadStorageDate() {
      const plantsStored = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStored[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatering(
        `Não esqueça de regar a ${plantsStored[0].name} em ${nextTime}.`
      );

      setMyPlants(plantsStored);
      setLoading(false);
    }

    loadStorageDate();
  }, []);

  
  if (loading) {
    if (myPlants.length === 0) {
      setLoading(false);
    }

    return <Load />
  }

  return (
    <Container>
      <Header />

      <SpotLight>
        <SpotLightImage source={waterDrop} />

        <SpotLightText>
          {
            myPlants.length === 0
              ? 'Adicione suas plantas'
              : nextWatering
          }
        </SpotLightText>
      </SpotLight>

      <Plants>
        <PlantText>Próximas regas</PlantText>

        <PlantList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PlantCardDetails 
              data={item}
              handleRemovePlantCard={() => {handleRemovePlantCard(item)}}
            />
          )}
          showVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
}
