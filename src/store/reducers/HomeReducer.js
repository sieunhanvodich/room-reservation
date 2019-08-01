import { SHOW_MODAL, CLOSE_MODAL, GET_DETAIL_MEETING, ADD_MEMBER, REMOVE_MEMBER, REMOVE_MEETING } from '../actions/ActionTypes';
let own = [
    { id: 1, isOwn: true, active: true, description: 'asdfsd asfdsdf sdfsfdsdf', requirement: "Bring your membership card", name: 'Meeting about eat', room: 'R3', from: '2h', to: '4h', members: [{ id: 1, name: 'Nguyen Tung Duong' }, { id: 2, name: 'Nguyen Xuan Phuc' }] },
    { id: 3, isOwn: true, active: false, description: 'asdfsd asfdsdf sdfsfdsdf', requirement: "Be a girl", name: 'Meeting todo', room: 'R3', from: '2h', to: '4h', members: [{ id: 1, name: 'Nguyen Tung Duong' }, { id: 2, name: 'Nguyen Xuan Phuc' }] },
    { id: 5, isOwn: true, active: false, description: 'asdfsd asfdsdf sdfsfdsdf', requirement: "Be a gay", name: 'Meeting abc', room: 'R3', from: '2h', to: '4h', members: [{ id: 1, name: 'Nguyen Tung Duong' }, { id: 2, name: 'Nguyen Xuan Phuc' }] },
];

let invited = [
    { id: 2, isOWn: false, active: false, description: 'asdfsd asfdsdf sdfsfdsdf', requirement: "Be a girl", name: 'Meeting 1', room: 'R3', from: '2h', to: '4h' },
    { id: 4, isOWn: false, active:false, description: 'asdfsd asfdsdf sdfsfdsdf', requirement: "Have a dick", name: 'Meeting 2', room: 'R3', from: '2h', to: '4h' },
];

let listMeeting = {own: own, invited: invited};

const homeReducer = (state = {show: false, currentDetailMeeting: {}, listMeeting: listMeeting}, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                show: true,
                currentDetailMeeting: action.currentDetail
            };
        case CLOSE_MODAL:
            return {
                ...state,
                show: false,
                currentDetailMeeting: {}
            };
        case GET_DETAIL_MEETING:
            return {
                ...state,
                currentDetailMeeting: action.detailMeeting
            };
        case ADD_MEMBER:
            return {
                ...state,
                currentDetailMeeting: {
                    ...state.currentDetailMeeting,
                    members: [...state.currentDetailMeeting.members, {id : state.currentDetailMeeting.members.length + 1, name: action.newMember}]
                }
            };
        case REMOVE_MEMBER:
            return {
                ...state,
                currentDetailMeeting: {
                    ...state.currentDetailMeeting,
                    members: state.currentDetailMeeting.members.filter(member => member.id !== action.idMember)
                }
            };
        case REMOVE_MEETING: 
            return {
                ...state,
                show: false,
                listMeeting: {
                    own: state.listMeeting.own.filter(meeting => meeting.id !== action.idMeeting),
                    invited: state.listMeeting.invited.filter(meeting => meeting !== action.idMeeting)
                }
            }
        default:
            return state;
    }
}

export default homeReducer;