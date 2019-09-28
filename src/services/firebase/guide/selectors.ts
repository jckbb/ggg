import { createSelector } from 'reselect';
import { ApplicationState } from 'store';
import { Guide } from './types';

const selectGuideById = (state: ApplicationState, props: string): Guide => state.firebase.byData[props];
const selectGuidesCount = (state: ApplicationState): number => state.firebase.allIds.length;
const selectGuideIds = (state: ApplicationState) => state.firebase.allIds;
const selectGuides = (state: ApplicationState) => state.firebase.byData;

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

export const selectGames = createSelector([selectGuideIds, selectGuides],
  (ids, guides) => ids.map((id: string, index: number) => guides[id].game)
);