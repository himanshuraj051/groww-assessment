import React, {Component} from "react";
import { Table, Dropdown, Dimmer, Loader } from 'semantic-ui-react'
import SearchContainer from "../SearchContainer";
import Axios from 'axios';

const states = [
    { key: 1, text: 'MUMBAI', value: 'MUMBAI' },
    { key: 2, text: 'DELHI', value: 'DELHI' },
    { key: 3, text: 'RANCHI', value: 'RANCHI' },
    { key: 4, text: 'GOA', value: 'GOA' },
    { key: 5, text: 'KOLKATA', value: 'KOLKATA'}
  ]

const category = [
    { key: 1, text: 'IFSC', value: 'ifsc' },
    { key: 2, text: 'Branch', value: 'branch' },
    { key: 3, text: 'Bank Name', value: 'bank_name' }
]
class BanksContainer extends Component {
    state = {
        data: [],
        city: 'MUMBAI',
        category: 'IFSC',
        isLoading: false

    }

    getBanks(value) {
        console.log('main', this.state.city)
        this.setState({isLoading: true})
        Axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=${value}`)
        .then((res) => {
            // console.log(res);
            this.setState({data: res.data});
            this.setState({isLoading: false});
            console.log(this.state.data, 'man');
        })
        .catch((err) => {
            this.setState({isLoading: false});
        })
    }

    handleChangeState = (e, { value }) => {
        this.setState({ city: value })
        console.log(value)
        this.getBanks(value);
    }
    handleChangeCategory = (e, { value }) => this.setState({ category: value })

    filterSearch(query) {
        // let filteredData = this.state.data && this.state.data.filter((ele) => ele.value.match(new RegExp(query), 'g'));
        // console.log(filteredData);
        console.log(this.state);
    }

    componentDidMount() {
        this.getBanks(this.state.city);
    }

    render() {
        const { value } = this.state

        console.log(this.state.city, this.state.category)
        return ( <>
        {this.state.isLoading &&  <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>}

        {!this.state.loading && <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="border border-dark">
                        <div className="pl-2 py-3 border-bottom border-dark">
                            All Banks
                        </div>
                        <div className="pl-2 py-3">
                            Favourites
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                    <div className="col d-flex align-items-center">
                        All Banks
                    </div>

                    <div className="col d-flex justify-content-end">
                        <div className="mx-2">
                            <Dropdown
                            onChange={this.handleChangeState}
                            options={states}
                            placeholder='Choose an option'
                            selection
                            value={value}
                            />
                        </div>
                       
                        <div className="mx-2">
                            <Dropdown
                            onChange={this.handleChangeCategory}
                            options={category}
                            placeholder='Choose an option'
                            selection
                            value={value}
                            />
                        </div>

                        <div>
                           <SearchContainer 
                                filterSearch = {this.filterSearch}
                                data = {this.state.data}
                                category = {this.state.category}
                           />
                        </div>
                    </div>
                    </div>

                    <div className="row mt-3 mr-2">
                        <Table fixed celled>
                            <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell textAlign="center" width={3}>Bank</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center" width={3}>IFSC</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center" width={3}>Branch</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center" width={3}>Bank ID</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center" width={4}>Address</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                
                            <Table.Body>
                            
                                {this.state.data.map((val) => {
                                    return <Table.Row>
                                        <Table.Cell textAlign="center" verticalAlign="center">{val.bank_name}</Table.Cell>
                                        <Table.Cell textAlign="center" verticalAlign="center">{val.ifsc}</Table.Cell>
                                        <Table.Cell textAlign="center" verticalAlign="center">{val.branch}</Table.Cell>
                                        <Table.Cell textAlign="center" verticalAlign="center">{val.bank_id}</Table.Cell>
                                        <Table.Cell textAlign="center" verticalAlign="center">{val.address}</Table.Cell>
                                  </Table.Row>
                                })}
    
                            
                           
                            </Table.Body>
                        </Table>
                    </div>

                </div>  
            </div>
        </div>}
        </>
        )
    }
}


export default BanksContainer;