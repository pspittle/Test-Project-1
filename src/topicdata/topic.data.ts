import { Topic} from '../models/topic.interface';

const topiclist: Topic[] = [
    {owner:"0", child:"1", wording:"Topic number 1"},
        {owner:"0", child:"2", wording:"Topic number 2"},
        {owner:"0", child:"3", wording:"Topic number 3"},
        {owner:"1", child:"1.1", wording:"Topic number 1 Subtopic 1"},
        {owner:"1", child:"1.2", wording:"Topic number 1 Subtopic 2"},
        {owner:"2", child:"2.1", wording:"Topic number 2 Subtopic 1"},
        {owner:"2", child:"2.2", wording:"Topic number 2 Subtopic 2"},
        {owner:"3", child:"3.1", wording:"Topic number 3 Subtopic 1"},
        {owner:"3", child:"3.2", wording:"Topic number 3 Subtopic 2"},
        {owner:"1.1", child:"1.1.1", wording:"Topic number 1 Subtopic 1 Ans1"},
        {owner:"1.1", child:"1.1.2", wording:"Topic number 1 Subtopic 1 Ans2"},
        {owner:"1.1", child:"1.1.3", wording:"Topic number 1 Subtopic 1 Ans3"},
        {owner:"1.2", child:"1.2.1", wording:"Topic number 1 Subtopic 2 Ans1"},
        {owner:"1.2", child:"1.2.2", wording:"Topic number 1 Subtopic 2 Ans2"},
        {owner:"1.2", child:"1.2.3", wording:"Topic number 1 Subtopic 2 Ans3"},
        {owner:"1.1", child:"1.1.4", wording:"Topic number 1 Subtopic 1 Ans4"},
        {owner:"1.1", child:"1.1.5", wording:"Topic number 1 Subtopic 1 Ans5"},
        {owner:"2.1", child:"2.1.1", wording:"Topic number 2 Subtopic 1 Ans1"},
        {owner:"2.1", child:"2.1.2", wording:"Topic number 2 Subtopic 1 Ans2"},
        {owner:"3.1", child:"3.1.1", wording:"Topic number 3 Subtopic 1 Ans1"},
        {owner:"3.1", child:"3.1.2", wording:"Topic number 3 Subtopic 1 Ans2"}
      ];
      
export const TOPIC_LIST = topiclist;

