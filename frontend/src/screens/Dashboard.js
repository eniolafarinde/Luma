import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Alert, 
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard 
} from 'react-native';

const { height } = Dimensions.get('window');

const Dashboard = () => {
  const today = new Date();
  const todayDateString = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayDateString);
  const getWeekDates = (date) => {
    const dates = [];
    const day = date.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;
    const monday = new Date(date);
    monday.setDate(date.getDate() + diffToMonday);

    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);
      dates.push({
        dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'][nextDay.getDay()],
        dayNum: nextDay.getDate(),
        dateString: nextDay.toISOString().split('T')[0],
        isToday: nextDay.toDateString() === today.toDateString(),
      });
    }
    return dates;
  };

  const weekDates = getWeekDates(today);
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const currentFormattedDate = getFormattedDate(selectedDate);
  const currentDayName = getDayName(selectedDate);

  const handleDayPress = (dateString) => {
    setSelectedDate(dateString);
  };

  const DayHeader = ({ dayName, dayNum, dateString }) => {
    const isSelected = selectedDate === dateString;

    return (
      <TouchableOpacity
        style={styles.dayHeader}
        onPress={() => handleDayPress(dateString)}
      >
        <Text style={styles.dayName}>{dayName}</Text>
        <View style={[
            styles.dayNumContainer,
            isSelected && styles.dayNumSelectedContainer
        ]}>
            <Text style={[
                styles.dayNum,
                isSelected && styles.dayNumSelectedText
            ]}>
                {dayNum}
            </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            {/* Week Header */}
            <View style={styles.weekHeaderContainer}>
                {weekDates.map((day) => (
                    <DayHeader
                        key={day.dateString}
                        dayName={day.dayName.substring(0, 3)}
                        dayNum={day.dayNum}
                        dateString={day.dateString}
                    />
                ))}
            </View>

            <View style={styles.dateInfoContainer}>
              <Text style={styles.todayDateText}>
                  Today, {currentFormattedDate}
              </Text>
              <Text style={styles.todayDayText}>
                  {currentDayName}
              </Text>
            </View>

            <View style={styles.journalEntryContainer}>
                <TextInput
                    style={styles.journalTextInput}
                    placeholder="Start your journal entry here..."
                    multiline={true}
                    textAlignVertical='top'
                />
            </View>

            {/* Bottom Nav (Mimicking the image's bottom bar) */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navButton}>
                    {/* Home Icon */}
                    <Text style={{ fontSize: 24 }}>🏠</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.plusButton} onPress={() => Alert.alert('Add', 'Add new entry.')}>
                    <Text style={styles.plusText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    {/* Person/Profile Icon */}
                    <Text style={{ fontSize: 24 }}>👤</Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4FA', // Light purple background
    paddingTop: 40,
    marginTop: 30, 
    // Reduced horizontal padding here since it's applied to sub-views
  },
  // --- Week Header Styles ---
  weekHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 25, // Increased padding to bring content inward
    marginBottom: 30,
  },
  dayHeader: {
    alignItems: 'center',
  },
  dayName: {
    fontFamily: 'Maitree',
    fontSize: 16,
    color: '#58429A', 
    fontWeight: '600',
  },
  dayNumContainer: {
    marginTop: 5,
    padding: 5,
    borderRadius: 10,
  },
  dayNum: {
    fontFamily: 'Itim',
    fontSize: 18,
    color: '#58429A',
    fontWeight: 'bold',
  },
  dayNumSelectedContainer: {
    backgroundColor: '#58429A',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  dayNumSelectedText: {
    color: '#FFFFFF',
  },

  dateInfoContainer: {
    paddingHorizontal: 25,
  },
  todayDateText: {
    fontFamily: 'Itim',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  todayDayText: {
    fontFamily: 'Maitree',
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },

  journalEntryContainer: {
    height: height * 0.55,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  journalTextInput: {
    fontFamily: 'Maitree',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flex: 1,
    padding: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  navButton: {
    padding: 10,
  },
  plusButton: {
    backgroundColor: '#58429A',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15 + 60 / 2, 
    bottom: 15,
    shadowColor: '#58429A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  plusText: {
    color: '#FFFFFF',
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '300',
  }
});

export default Dashboard;