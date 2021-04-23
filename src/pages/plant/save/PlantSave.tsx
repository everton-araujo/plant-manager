import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import { Button } from '../../../components/button/Button.component';

import { PlantProps } from '../../../libs/storage';

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

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(_: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());

      return Alert.alert('Escolha um horário futuro');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerAndroid() {
    setShowDatePicker(oldState => !oldState);
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
          onPress={() => {}}
        />
      </Controller>
    </Container>
  );
}
