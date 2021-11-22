import { Input, Tooltip } from 'antd';
import { SearchOutlined} from '@ant-design/icons';

import '../../styles/css/searchBarStyle.css';

interface Props{
  value: string;
  onChange: (event: Event) => void;
}

interface Event{
  target: {value: string};
}

// Function that display the searchBar and Track the filter
const SearchBar: React.FC<Props> = (props) => {
  const {value, onChange} = props;

  // Return a searchBar
  return (
    <div>
      <Input value={value} onChange={onChange} placeholder="Type to filter by name" allowClear  style={{ width: 300 }}  suffix={<Tooltip title="Filter by name">
        <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
      </Tooltip>}/>
    </div>
  )
}

export default SearchBar;