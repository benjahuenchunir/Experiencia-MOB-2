import { SafeAreaView, StyleSheet } from 'react-native';
import HabitCard from './components/HabitCard'; // Importa el componente HabitCard

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <HabitCard name="Habito 1" onDelete={(habit) => console.log("Deleting " + habit)} />
            <HabitCard name="Habito 2" onDelete={(habit) => console.log("Deleting " + habit)} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
