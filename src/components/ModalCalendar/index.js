import React, { useState } from "react"
import { Calendar } from 'react-native-calendars'
import {Picker} from '@react-native-picker/picker';
import { View } from "react-native";
import { date } from "yup";


const ModalCalendar = () => {
    const [current, setCurrent] = useState('');
    const [selectedMonth,setSelectedMonth] = useState('');
    const [selectedYear,setSelectedYear] = useState('');
    const [date,setDate] = useState('');
    
    return(
    <Calendar 
        monthFormat="MM YYYY"
        current={current}
        key={current}
        hideArrows
        theme={{
            textDayFontFamily: 'Nippo-Light',
            textMonthFontFamily: 'Nippo-Light',
            textDayHeaderFontFamily: 'Nippo-Medium',
            todayButtonFontFamily: 'Nippo-Light',
        
        }}
        markingType={"custom"}
        markedDates={{
            [date]: {
                customStyles: {
                    container: {
                        backgroundColor: '#2AC6A8',
                        borderRadius: 7,
                    },
                    text: {
                        color: '#ffffff',
                    }
                
                }
            }
        }}
        hideExtraDays={true}
        onDayPress={(day) => {
            setDate(day.dateString);
            }}
        renderHeader={(date)=>{
            let month = date.getMonth()+1;
            let y = date.getFullYear()+"";

            let year= [];
            for(let i=1800;i<2050;i++){
                year[i-1800] = i+"";
            }
            let k;
            if(month<10){
                k = '0'+month.toString(10);
            } else {
                k = month.toString(10);
            }
            setSelectedMonth(k)
            setSelectedYear(y)
            return (
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{borderBottomWidth: 1,borderColor: '#474a47' ,marginRight: 20}}>
                        <Picker
                        selectedValue={selectedMonth}
                        onValueChange={(itemValue,itemIndex) => {
                            setSelectedMonth(itemValue),
                            setCurrent(selectedYear+"-"+itemValue+"-01")
                        }}
                        style={{width: 120, fontFamily: 'Nippo-Light'}}
                        >
                            <Picker.Item label="January" value="01" />
                            <Picker.Item label="February" value="02" />
                            <Picker.Item label="March" value="03" />
                            <Picker.Item label="April" value="04" />
                            <Picker.Item label="May" value="05" />
                            <Picker.Item label="June" value="06" />
                            <Picker.Item label="July" value="07" />
                            <Picker.Item label="August" value="08" />
                            <Picker.Item label="September" value="09" />
                            <Picker.Item label="October" value="10" />
                            <Picker.Item label="November" value="11" />
                            <Picker.Item label="December" value="12" />

                        </Picker>
                        </View>
                        <View style={{borderBottomWidth: 1,borderColor: '#474a47'}} >
                            <Picker
                            selectedValue={selectedYear}
                            onValueChange={(itemValue,itemIndex) => {
                                setSelectedYear(itemValue);
                                setCurrent(itemValue+"-"+selectedMonth+"-01")

                            }}
                            style={{width: 120,fontFamily: 'Nippo-Light'}}
                            >
                                {year.map(item => (
                                    <Picker.Item key={item} label={item} value={item} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={{width: '100%', marginTop: 6, height: 1, backgroundColor: '#E7ECF4'}}></View>
                </View>
                
            )
        }}
    />
    );
    
}

export default ModalCalendar;

