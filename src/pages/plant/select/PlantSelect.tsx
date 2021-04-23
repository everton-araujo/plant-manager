import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import api from '../../../services/api';
import { PlantProps } from '../../../libs/storage';

import { EnvironmentButton } from '../../../components/enviromentButton/EnvironmentButton.component';
import { Header } from '../../../components/header/Header.component';
import { PlantCard } from '../../../components/plant/PlantCard.component';
import { Load } from '../../../components/load/Load.component';

import { theme } from '../../../infrastructure/theme';

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

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>();
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

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

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant });
  }

  async function fetchPlants() {
    const { data } = await api
      .get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`);

    if (!data) {
      return setLoading(true);
    }

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);

    fetchPlants();
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
    fetchPlants();
  }, []);

  if (loading) {
    return <Load />
  }

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
        keyExtractor={(item) => String(item.key)}
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
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <PlantCard 
              data={item} 
              onPress={() => handlePlantSelect(item)}
            />
            )}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => 
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore && <ActivityIndicator color={theme.colors.green} />
          }
        />
      </PlantListContainer>

    </Container>
  );
}
