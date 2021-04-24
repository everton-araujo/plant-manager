import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import waterDrop from '../../../assets/waterdrop.png';

import { Header } from '../../../components/header/Header.component';
import { PlantProps, loadPlant } from '../../../libs/storage';

import {
  Container,
  SpotLight,
  SpotLightImage,
  SpotLightText,
  Plants,
  PlantText,
  PlantList
} from './MyPlants.style';
import { PlantCardDetails } from '../../../components/plant/PlantCardDetails.component';

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
      )

      setMyPlants(plantsStored);
      setLoading(false);
    }

    loadStorageDate();
  }, []);

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
          renderItem={({ item }) => (
            <PlantCardDetails data={item} />
          )}
          showVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
}
