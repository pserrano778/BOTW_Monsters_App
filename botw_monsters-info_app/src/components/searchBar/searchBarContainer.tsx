import SearchBar from './searchBar'

interface Props{
    value: string;
    onChange: (s: string) => void;
}

interface Event{
    target: {value: string};
}
  
// Function that Track the filter
const SearchBarContainer: React.FC<Props> = (props) => {
    const {value, onChange} = props;

    // Change the value
    const handleChange = (e: Event) => {
        onChange(e.target.value)
    }

    // Return a searchBar
    return (
        <SearchBar value={value} onChange={handleChange}/>
    )
}
export default SearchBarContainer;