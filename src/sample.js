import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Modal,
    Image,
    Dimensions,
    Alert,
    TextInput,
} from 'react-native';
import { apiRequest } from '../api/apiHelper';
import { DataTable } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import Snackbar from 'react-native-snackbar';
import { Keyboard } from 'react-native';

export default function Rates() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setCategory] = useState('');
    const [cat, setCat] = useState([]);
    const [result, setResult] = React.useState([]);
    const [quantity, setQuantity] = useState('');
    const [productName, setProductName] = useState('');
    const [modalLoading, setModalLoading] = useState();

    const { token, name, email, phone, address, type } = useSelector(
        (state) => state,
    );
    console.log('Type', type);
    // const token =
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjdlZDYxZTE0ZTIxOWMxY2EyMzk1ODc3ODkyYWI1ODRiNDkxMWZjMzQzZWI3OGZiZjRhMTVkZmM4NWY4MTQ4N2I3MGE2ZjYzZTc5NzFmNmYiLCJpYXQiOiIxNjE0OTI1MTA2LjgxNTQ4MyIsIm5iZiI6IjE2MTQ5MjUxMDYuODE1NDg3IiwiZXhwIjoiMTY0NjQ2MTEwNi43OTkxMTIiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.IKmI_sQTsYLP_mvV2-aUMqe0QBb5dD3YFSZ6gWD5ryqBOw9qb2C7W2FgdMUglG6NQiQpfbfQJEpO6brqW6BLhTSChmMa35mufpaWhJG1nhKqrqvCg_zn1F7gDca4WIb0N4logYdUBuDNDPMKfQWycd53j83K6ZXO-JLwgnZ5QcUxKoR6qmvNhuiXtF87oEKPevSrL5Y_PqtsxfmKOt65cZ0w8ufREGhD7fzT9c4Mz0BN8JvvqfFluLfYyCcJvpe1mrPu_BtQxTbNnQxb7SSRjQs9ANo_XpHoTtJTgu5YBoN4vMUSFlEldbvcAy8z6OaYB9YaUBwKZ70SZd1cHEMDMQ9G5YulFfaZRQuKOsA80gxEylpfao-c_1stBD9FRYUdc8jIPhCCa4MYCc29iNrOMPO0LvedDjY_njwvs-J_Ef1OFrI-cxtpI7ZAhJCw1iPNnGSZmkND6kFP-nYGZpwJxYquZ5fJHdOYAHlUN9FhsGR-hLdjCzae5d15N5R9BioZoDubq3cRH-22yarCMoQm9d3z_9otrynMiTm9DKp095aIl1A5Wlrlr0FsaNyD5mWu_8kKlh9q5SP6wz1C8LQVnEDqAHsdl0LHUGRBTfqM7wrpyJ8BkVfxUa6e9Vzy4RR_r_fL32J_dk5DKt9II6VXDGDZlWcvRx7BVQANzcDNe-w';

    useEffect(() => {
        const header = {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        };

        apiRequest(
            'GET',
            'https://uditsolutions.in/exporter/public/api/rates',
            {},
            header,
        )
            .then((json) => {
                // console.log('data Rates page', json);
                setData(json);// rates = seData
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        try {
            fetch(`https://uditsolutions.in/exporter/public/api/categories`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    setCat(json); //setCat = catagories
                    // console.log('Categories', json);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        } catch (e) {
            console.log('error', e);
        }
    }, []);

    const enquiryMethod = () => {
        try {
            fetch('https://uditsolutions.in/exporter/public/api/customers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sub_category_name: productName,
                    name: name,
                    email: email,

                    address: address,
                    quantity: quantity,
                    type: type,
                    source: 'user_app',
                    phone: phone,
                }),
            })
                .then((response) => {
                    console.log('response', response);
                })
                .catch((error) => console.error('##########', error))
                .finally(() => {
                    setModalLoading(false);
                    setModalVisible(!modalVisible);
                });
        } catch (e) {
            console.log('error', e);
        }
    };

    console.log('Cat Id#########', selectedCategory);
    if (isLoading == true) {
        return (
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Loading....</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        // flex: 0.1,
                        backgroundColor: '#e6e6fa',
                        justifyContent: 'center',
                        alignItems: 'center',

                        height: '8%',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,

                            color: 'black',
                        }}>
                        KRTEX
          </Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri:
                                'https://images.unsplash.com/photo-1568354931331-e95077a215ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        backgroundColor: '#e6e6fa',
                        marginTop: 5,
                    }}>
                    <Text
                        style={{
                            marginTop: 17,
                            fontWeight: 'bold',
                            fontSize: 14,
                            marginLeft: 10,
                        }}>
                        Select Category:
                    </Text>

                    <Picker
                        selectedValue={selectedCategory}
                        mode="dropdown"
                        style={{
                            width: '50%',
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            setCategory(itemValue);
                            setResult(
                                data.filter(
                                    (item, i) =>
                                        parseInt(item.sub_category.app_category_id) === itemValue,
                                ),
                            );
                        }}>
                        {cat &&
                            cat.length > 0 &&
                            cat.map((opt, i) => (
                                <Picker.Item label={opt?.name} value={opt?.id} />
                            ))}
                    </Picker>
                </View>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            width: Dimensions.get('window').width,
                            marginTop: 5,
                        }}>
                        <DataTable>
                            <DataTable.Header style={{ backgroundColor: '#191970' }}>
                                <DataTable.Title style={{ marginRight: 20 }}>
                                    {<Text style={styles.headerText}>Product Name</Text>}
                                </DataTable.Title>
                                <DataTable.Title numeric>
                                    {<Text style={styles.headerText}>Rates</Text>}
                                </DataTable.Title>
                                <DataTable.Title numeric>
                                    {<Text style={styles.headerText}>MOQ</Text>}
                                </DataTable.Title>
                                <DataTable.Title numeric>
                                    {<Text style={styles.headerText}>Enquiry</Text>}
                                </DataTable.Title>
                            </DataTable.Header>
                            {result.length == 0 ? (
                                <Text style={{ marginLeft: 150, marginTop: 100 }}>
                                    No Products
                                </Text>
                            ) : (
                                <View></View>
                            )}
                            {result &&
                                result.length > 0 &&
                                result.map((opt, i) => (
                                    <DataTable.Row
                                        style={{
                                            backgroundColor: '#f0f8ff',
                                        }}
                                        key={i}>
                                        <DataTable.Cell
                                            onPress={() => Alert.alert(opt.sub_category.name)}>
                                            {opt?.sub_category?.name}
                                        </DataTable.Cell>
                                        <DataTable.Cell numeric>{opt?.amount}</DataTable.Cell>
                                        <DataTable.Cell numeric>
                                            {opt?.sub_category?.moq}
                                        </DataTable.Cell>
                                        <DataTable.Cell numeric>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setModalVisible(true);
                                                    setProductName(opt?.sub_category?.name);
                                                }}>
                                                <View
                                                    style={{
                                                        backgroundColor: 'skyblue',
                                                        borderWidth: 1,
                                                        borderColor: 'grey',
                                                        borderRadius: 5,
                                                        justifyContent: 'center',
                                                    }}>
                                                    <Text style={{ fontSize: 12 }}>Get Info</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                        </DataTable>
                    </View>
                </ScrollView>
                {modalVisible ? (
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}>
                        <View style={styles.centeredView}>
                            {modalLoading ? (
                                <ActivityIndicator size="large" color="blue" />
                            ) : (
                                <View></View>
                            )}
                            <View style={styles.modalView}>
                                <TextInput
                                    style={{
                                        borderWidth: 2,
                                        borderColor: '#b0e0e6',
                                        width: '80%',
                                        borderRadius: 10,
                                        marginBottom: 5,
                                        backgroundColor: 'white',
                                    }}
                                    color="#3A1292"
                                    placeholder="Name"
                                    defaultValue={name}
                                    editable={false}
                                />
                                <TextInput
                                    style={{
                                        borderWidth: 2,
                                        borderColor: '#b0e0e6',
                                        width: '80%',
                                        borderRadius: 10,
                                        marginBottom: 5,
                                        backgroundColor: 'white',
                                    }}
                                    color="#3A1292"
                                    placeholder="Email"
                                    defaultValue={email}
                                    editable={false}
                                />
                                <TextInput
                                    style={{
                                        borderWidth: 2,
                                        borderColor: '#b0e0e6',
                                        width: '80%',
                                        borderRadius: 10,
                                        marginBottom: 5,
                                        backgroundColor: 'white',
                                    }}
                                    color="#3A1292"
                                    placeholder="Phone No"
                                    keyboardType="phone-pad"
                                    defaultValue={phone}
                                    editable={false}
                                />
                                <TextInput
                                    style={{
                                        borderWidth: 2,
                                        borderColor: '#b0e0e6',
                                        width: '80%',
                                        borderRadius: 10,
                                        marginBottom: 5,
                                        backgroundColor: 'white',
                                    }}
                                    color="#3A1292"
                                    placeholder="Location"
                                    defaultValue={address}
                                    editable={false}
                                />

                                <TextInput
                                    style={{
                                        borderWidth: 2,
                                        borderColor: '#b0e0e6',
                                        width: '80%',
                                        borderRadius: 10,
                                        marginBottom: 5,
                                        backgroundColor: 'white',
                                    }}
                                    color="#3A1292"
                                    placeholder="Type"
                                    // onChangeText={(type) => setType(type)}
                                    defaultValue={type}
                                    editable={false}
                                />

                                <TextInput
                                    style={{
                                        borderWidth: 2,
                                        borderColor: '#b0e0e6',
                                        width: '80%',
                                        borderRadius: 10,
                                        marginBottom: 5,
                                        backgroundColor: 'white',
                                    }}
                                    color="#3A1292"
                                    placeholder="Quantity"
                                    onChangeText={(quantity) => setQuantity(quantity)}
                                    defaultValue={quantity}
                                    keyboardType="numeric"
                                />

                                <TextInput
                                    style={{
                                        borderWidth: 2,
                                        borderColor: '#b0e0e6',
                                        width: '80%',
                                        borderRadius: 10,
                                        marginBottom: 5,
                                        backgroundColor: 'white',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    }}
                                    color="#3A1292"
                                    multiline={true}
                                    // placeholder="Requirement"
                                    defaultValue={productName}
                                    editable={false}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                    }}>
                                    <TouchableOpacity
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => {
                                            if (quantity == '') {
                                                Keyboard.dismiss();
                                                Snackbar.show({
                                                    text: 'Quantity Field Mandatory',
                                                    duration: Snackbar.LENGTH_LONG,
                                                });
                                            } else {
                                                Keyboard.dismiss();
                                                setModalLoading(true);
                                                enquiryMethod();
                                            }
                                        }}>
                                        <Text style={styles.textStyle}>Submit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                ) : (
                    <View></View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6E1E7',
    },
    tinyLogo: {
        width: Dimensions.get('window').width,
        height: 230,
    },
    headerText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: Dimensions.get('window').width,
        margin: 20,
        backgroundColor: `#fff8dc`,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});