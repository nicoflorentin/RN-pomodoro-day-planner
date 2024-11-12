import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'; // Asumimos que ya tienes este componente de Dialog configurado
import { Button } from '~/components/ui/button'; // El botón de tu UI (estilo personalizado)

// Componente de loader
const LoadingIndicator = () => (
  <View className="flex justify-center items-center">
    <Text>Loading...</Text> {/* Aquí podrías reemplazarlo por un spinner o cualquier otro indicador */}
  </View>
);

const CreateTaskDialog = () => {
  const [loading, setLoading] = useState(false); // Estado de carga
  const [formData, setFormData] = useState({ name: '', email: '' }); // Estado del formulario
  const [isOpen, setIsOpen] = useState(false); // Estado que controla si el Dialog está abierto o cerrado

  // Handler para el submit del formulario
  const addTaskHandler = async () => {
    setLoading(true);
    // Simulando una solicitud asincrónica (puedes cambiarlo por una llamada a API)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false); // Desactivar el loader cuando la simulación termine

      // Cerrar el Dialog después de crear el usuario o enviar el formulario
      setIsOpen(false); // Cambiar el estado a falso para cerrar el Dialog
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} className="">
      <DialogTrigger className="" asChild>
        <Text className="text-4xl text-white font-bold text-center">+</Text>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] border-8 border-black">
        <DialogHeader>
          <DialogTitle>Crear Tarea</DialogTitle>
          <DialogDescription>
            <Text className="text-center font-bold text-md">
              Ingresa los detalles de la tarea
            </Text>
          </DialogDescription>
        </DialogHeader>

        {/* Formulario */}
        <View className="flex flex-col gap-4">
          <TextInput
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            placeholder="Nombre de la tarea"
            className="p-2 border border-gray-300 rounded mb-4"
          />
          <TextInput
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder="Correo electrónico (opcional)"
            keyboardType="email-address"
            className="p-2 border border-gray-300 rounded mb-4"
          />
        </View>

        <DialogFooter className="m-auto">
          <DialogClose asChild>
            <Text>Cancelar</Text>
          </DialogClose>

          {/* Botón de "OK" con Loader */}
          <Button onPress={addTaskHandler} disabled={loading}>
            {loading ? <LoadingIndicator /> : <Text>OK</Text>}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
