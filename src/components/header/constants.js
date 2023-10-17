import { ReactComponent as Plannig } from '../../images/icon-planning.svg';
import { ReactComponent as Calendar } from '../../images/icon-calendar.svg';
import { ReactComponent as Todo } from '../../images/icon-todo.svg';
import { ReactComponent as Reminders } from '../../images/icon-reminders.svg';

export const FEATURES = [
    { text: 'Рейтинг', icon: <Todo /> },
    { text: 'Календарь', icon: <Calendar />},
    { text: 'GPS трекер', icon: <Reminders />},
    { text: 'Тайминг', icon: <Plannig />},
];

export const COMPANY = [
    { text: 'Передержка' },
    { text: 'Выгул' },
    { text: 'В добрые руки' },
]