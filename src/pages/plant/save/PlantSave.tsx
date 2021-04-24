import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import { Button } from '../../../components/button/Button.component';

import { PlantProps, savePlant } from '../../../libs/storage';

import waterDrop from '../../../assets/waterdrop.png';

import {
  Container,
  PlantInfo,
  PlantName,
  PlantDescription,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  DateTimePickerButton,
  DateTimePickerButtonText
} from './PlantSave.style';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const navigation = useNavigation();
  const route = useRoute();

  const { plant } = route.params as Params;

  function handleChangeTime(_: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }
    
    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre iremos lembra-lo de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito Obrigado',
        icon: 'hug',
        nextScreen: 'MyPlants'
      });
      
    } catch (err) {
      Alert.alert('Não foi possível salvar');
    }
  }

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri 
          uri={plant.photo}
          height={150}
          width={150}
        />

        <PlantName>{plant.name}</PlantName>

        <PlantDescription>
          {plant.about}
        </PlantDescription>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={waterDrop} />

          <TipText>
            {plant.water_tips}
          </TipText>
        </TipContainer>

        <AlertLabel>
          Escolha o melhor horário para ser lembrado:
        </AlertLabel>

        {
          showDatePicker &&
            <DateTimePicker 
              value={selectedDateTime}
              mode='time'
              display='spinner'
              onChange={handleChangeTime}
            />
        }

        {
          Platform.OS === 'android' && (
            <DateTimePickerButton
              onPress={handleOpenDateTimePickerAndroid}
            >
              <DateTimePickerButtonText>
                {`Alterar ${format(selectedDateTime, 'HH:mm')}`}
              </DateTimePickerButtonText>
            </DateTimePickerButton>
          )
        }

        <Button
          title='Cadastrar Planta'
          onPress={handleSave}
        />
      </Controller>
    </Container>
  );
}
