//add imports
import React, {useState} from "react";
import{View, Text, TouchableOpacity, StyleSheet} from 'react-native';


//create an array of questions and answers

//create a component
const flashcards = [
  {question: 'What is our National Anthem' , answer:'Nkosi..'},
  {question: 'Where is the Kruger National Park' , answer:'Joburg'},
  {question: 'what is the capital of South Africa' , answer:'Pretoria'},
  {question: 'Where is the table mountain in South Africa' , answer:'Cape Town'},
];

//Define the main component for the flashcard app 
//in this component we need to define variables that will hamdle idexing,
//this means that the card will show the answer or when tapped on/clicked ,
//it will hide the answer
//create variables and set variables

const App =() =>{

  const [currentCardIndex, setCurrentCardIndex] = useState(0); //index set to zero, first card will show

  const [showAnswer, setShowAnswer] = useState(false); //either show or hide the answer

  //to show the card to actually display the answer, we need a function to display
  const toggleAnswer =() =>{
    setShowAnswer(!showAnswer);
  };

  //function to move onto the next card
  const nextCard =() =>{
    setCurrentCardIndex((currentCardIndex + 1) % flashcards.length);//cycle through the cards
    setShowAnswer(false); //hide the answer as we move onto the next card
  };

  //style components
  //creating a UI
  //creating a style container

  return(
    <View style={styles.container}>
      <View style={styles.card}>
      <TouchableOpacity style={styles.cardInner} onPress={toggleAnswer}>
        <Text style={styles.cardText}>
          {showAnswer ? flashcards[currentCardIndex].answer:
           flashcards[currentCardIndex].question}

        </Text>
      </TouchableOpacity>
    </View>
            <TouchableOpacity style={styles.button} onPress={nextCard}>
              <Text style={styles.buttonText}>Next Card</Text>
            </TouchableOpacity>
    </View>
  );
};

//stylesheet css styling
//use Stylesheet.create

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5f9ea0',
  },

  card:{
    width:300,
    height:200,
    backgroundColor:'white',
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
  },

  cardInner:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 20,
  },

  cardText:{
    fontSize: 20,
    textAlign: 'center',
  },

  button:{
    backgroundColor:'#dcdcdc',
    borderRadius:8,
    paddingVertical:12,
    paddingHorizontal:20,
    marginTop:20,
  },

  buttonText:{
    color:'black',
    fontWeight:'bold',
  },

});
export default App;
