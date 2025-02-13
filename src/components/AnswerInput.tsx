import { PlusCircle, X } from 'lucide-react';
import { Answer } from '../types';

interface AnswerInputProps {
  answers: Answer[];
  onAnswerChange: (id: string, text: string) => void;
  onAddAnswer: () => void;
  onRemoveAnswer: (id: string) => void;
  isSingleAnswer: boolean;
}

export default function AnswerInput({
  answers,
  onAnswerChange,
  onAddAnswer,
  onRemoveAnswer,
  isSingleAnswer,
}: AnswerInputProps) {
  return (
    <div className="space-y-3">
      {answers.map((answer) => (
        <div key={answer.id} className="flex items-center gap-2">
          <input
            type="text"
            value={answer.text}
            onChange={(e) => onAnswerChange(answer.id, e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="답변을 입력하세요..."
          />
          {answers.length > 1 && (
            <button
              type="button"
              onClick={() => onRemoveAnswer(answer.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>
          )}
        </div>
      ))}
      
      {!isSingleAnswer && (
        <button
          type="button"
          onClick={onAddAnswer}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <PlusCircle size={20} />
          <span>답변 추가</span>
        </button>
      )}
    </div>
  );
}