import React from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

   function handleSubmit(event) {
       event.preventDefault();
       let newSearchTerm = '';


       setSearchTerm(newSearchTerm);
       
    console.log(searchTerm);
    props.filterSearch(searchTerm)

   }
    return ( 
        <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Control input="search" type='text' name="searchTerm" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} size='lg' />
            <input type="button" value="Search" type="submit" className="btn btn-info" /> 
            </Form.Group>
            </Form>
        </Container>
     );
}
 
export default SearchBar;