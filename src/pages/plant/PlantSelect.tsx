import React, { useEffect, useState } from 'react';
import { EnvironmentButton } from '../../components/enviromentButton/EnvironmentButton.component';

import api from '../../services/api';

import { Header } from '../../components/header/Header.component';
import { PlantCard } from '../../components/plant/PlantCard.component';

import {
  Container,
  TextContent,
  Title,
  SubTitle,
  EnvironmentList,
  PlantListContainer,
  PlantList
} from './plantSelect.style';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>();
  const [plants, setPlants] = useState<PlantProps[]>();
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>();
  const [environmentSelected, setEnvironmentSelected] = useState('all');

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants?.filter(plant =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');

      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        }, 
        ...data
      ]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants?_sort=name&order=asc');
      setPlants(data);
    }

    fetchPlants();
  }, []);

  return (
    <Container>
      <Header />

      <TextContent>
        <Title>
          Em qual ambiente
        </Title>
        <SubTitle>
          você quer colocar sua planta?
        </SubTitle>
      </TextContent>

      <EnvironmentList
        data={environments}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <EnvironmentButton 
            title={item.title}
            active={item.key === environmentSelected}
            onPress={() => handleEnvironmentSelected(item.key)}
          />
        )}
        contentContainerStyle={{
          height: 40,
          justifyContent: 'center',
          paddingBottom: 5,
          marginLeft: 32,
          marginVertical: 32,
          paddingRight: 60,
        }}
      />

      <PlantListContainer>
        <PlantList 
          data={filteredPlants}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <PlantCard 
              data={item} 
            />
          )}
        />
      </PlantListContainer>

    </Container>
  );
}
