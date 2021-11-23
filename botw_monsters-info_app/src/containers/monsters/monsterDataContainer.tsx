import React, { useEffect } from "react";
import MonsterView from "../../components/monsters/monsterView.component";
import {useParams} from "react-router-dom";
import { getMonster, resetMonster } from "../../redux/actions/monsters"
import { MonsterDetails } from '../../redux/types'
import { connect, ConnectedProps } from 'react-redux'

// Props interface
interface Props extends PropsFromRedux {
    monsterDetails: MonsterDetails
    getMonster: (name: string) => void
    resetMonster: () => void
}

// State interface
interface State {
    monsterDetails: MonsterDetails
}

const MonsterDataContainer: React.FC<Props> = (props) => {

    // Use state for allMonsterInfo
    const{monsterDetails, getMonster, resetMonster} = props;
    let name = useParams().name as string;

    // Use effect to get the info the first time
    useEffect(() => {
        getMonster(name);
        return () => {
            resetMonster();
        };
    }, [name, getMonster, resetMonster])

    // Check if data has been loaded
    let display = <p>Loading Data</p>;
    if(monsterDetails && monsterDetails.name!="") {
        display = <MonsterView name={monsterDetails.name} locations={monsterDetails.locations} description={monsterDetails.description} drops={monsterDetails.drops} src={monsterDetails.image}/>;
    }
    return display;
}

// Map the current state to props
const mapStateToProps = (state: State) => ({
    monsterDetails: state.monsterDetails
})

// Connect
const connector = connect(mapStateToProps, { getMonster, resetMonster })
type PropsFromRedux = ConnectedProps<typeof connector>

// Export the connector
export default connector(MonsterDataContainer);