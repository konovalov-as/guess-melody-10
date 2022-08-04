import {gameData} from './game-data';
import {makeFakeArtistQuestion, makeFakeGenreQuestion} from '../../utils/mocks';
import {fetchQuestionAction} from '../api-actions';

const questions = [makeFakeArtistQuestion(), makeFakeGenreQuestion()];

describe('Reducer: gameData', () => {
  it('without additional parameters should return initial state', () => {
    expect(gameData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({questions: [], isDataLoaded: false});
  });

  it('should update questions by load questions', () => {
    const state = {questions: [], isDataLoaded: false};
    expect(gameData.reducer(state, {type: fetchQuestionAction.fulfilled.type, payload: questions}))
      .toEqual({questions, isDataLoaded: false});
  });
});
