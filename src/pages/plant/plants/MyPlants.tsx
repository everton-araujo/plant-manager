import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import waterDrop from '../../../assets/waterdrop.png';

import { PlantProps, loadPlant } from '../../../libs/storage';
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

  useEffect(() => {
    async function loadStorageDate() {
      const plantsStored = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStored[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatering(
        `Não esqueça de regar a ${plantsStored[0].name} à ${nextTime} horas.`
      );

      setMyPlants(plantsStored);
      setLoading(false);
    }

    loadStorageDate();
  }, []);

  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <Header />

      <SpotLight>
        <SpotLightImage source={waterDrop} />

        <SpotLightText>{nextWatering}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantText>Próximas regas</PlantText>

        <PlantList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PlantCardDetails data={item} />
          )}
          showVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
}
