import React from 'react';
import { Feather } from '@expo/vector-icons';
import { CheckBox, View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const imgbg1= '../../assets/bg1.png';
const bd1='../../assets/bd1.png'
const bd2='../../assets/bd2.png'

export default function Login (){
    return(
        <View style={styles.container}>
            <ImageBackground source={require(imgbg1)} style={styles.imagemFundo}>
                <View style={styles.titulo}>
                    <Text style={styles.texto} >ENTRE COM SEUS DADOS</Text>
                </View>
                <View>
                    <TextInput
                    placeholder="Login"
                    autoCorrect={false}
                    style={styles.input1}
                    />
                    <TextInput
                    placeholder="Senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={styles.input1}
                    />
              </View>
              <View style={styles.mark}>
                <CheckBox style={styles.checkbox} value={false}>
                </CheckBox>
                <Text style={styles.texto1}>LEMBRAR MEUS DADOS</Text>
              </View>
              <TouchableOpacity 
                style={styles.botao}
                onPress={() => {}}
              >
                <Text style={styles.botaotexto}>ENTRAR</Text>
              </TouchableOpacity>
              <View style={styles.registro}>
                <TouchableOpacity style={styles.cadastro}>
                    <Feather name="lock" size={17} color="#fff" padding={5}/>
                    <Text style={styles.recuperar}>Recuperar Senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.conta}>                   
                    <Text style={styles.recuperar}>Criar Conta</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bandeiras}>
                    <TouchableOpacity style={styles.bd1}>
                            <Image source={require(bd1)} />                    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bd2}>
                            <Image source={require(bd2)} />                    
                    </TouchableOpacity>
              </View>
              
              
        </ImageBackground>
      </View>

    );
}