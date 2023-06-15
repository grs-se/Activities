import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
  activities: Activity[];
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

function ActivityDashboard({ activities,
  deleteActivity, submitting }: Props) {

  const { activityStore: { selectedActivity, editMode } } = useStore();

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          deleteActivity={deleteActivity}
          submitting={submitting}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode &&
          <ActivityDetails />}
        {editMode &&
          <ActivityForm/>}
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDashboard);