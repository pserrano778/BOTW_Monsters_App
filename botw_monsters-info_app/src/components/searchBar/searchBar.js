import { Input } from 'antd';
import '../../styles/css/searchBarStyle.css';
// Function that display the searchBar and Track the filter
export default function SearchBar({value, onChange}) {
    const { Search } = Input;
    // Change the value
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    // Return a searchBar
    return (
        <div>
            <Search value={value} onChange={handleChange} placeholder="input search text" allowClear  style={{ width: 200 }} />
        </div>
    )
  }