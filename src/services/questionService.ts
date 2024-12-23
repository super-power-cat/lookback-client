import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase'
import { FirestoreQuestion, Question } from '../types';

export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const questionsRef = collection(db, 'questions');
    const q = query(questionsRef, orderBy('id'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data() as FirestoreQuestion;
      return {
        ...data,
        answers: [] // 초기 답변은 빈 배열로 설정
      };
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}