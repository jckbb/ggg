import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { Guide } from './types';

const selectGuideById = (state: ApplicationState, props: string): Guide => state.firebase.byData[props];
const selectGuidesCount = (state: ApplicationState): number => state.firebase.allIds.length;

export const selectBasicGuide = createSelector([selectGuideById, selectGuidesCount], (guide, count) => 
  count > 0 
  ? ({
      id: guide.id,
      title: guide.title,
      author: guide.author,
      steps: guide.steps
    })
  : ({
      id: '',
      title: '',
      author: '',
      steps: []
    })
);