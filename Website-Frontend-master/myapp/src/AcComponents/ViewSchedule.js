import React, { Component } from 'react'
import axios from 'axios'
import '../CSS/table.css'

import CoordinatorHome from "./CoordinatorHome"
import HodHome from "./HodHome.component"
import InstructorHome from "./InstructorHome"
import TaHome from "./TaHome"


var role = localStorage.getItem('role')

export default class ViewSchedule extends Component {




	constructor(props) {
		super(props);

		this.back = this.back.bind(this)


	}

	componentDidMount() {


		axios.get('http://localhost:3000/as/viewschedule',
			{ headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {

				alert(res.data.msg)
			}).catch((err) => {
				alert(err)
			})

	}


	back() {

		switch (role) {
			case 'hod': window.location = '/HodHome'; break;
			case 'instructor': window.location = '/InstructorHome'; break;
			case 'coordinator': window.location = '/CoordinatorHome'; break;
			case 'ta': window.location = '/TaHome'; break;
		}
	}



	render() {


		switch (role) {


			case 'coordinator': return (
				<div>

					<CoordinatorHome />
					<div className='container'>

						<div className="container">
							<table>
								<thead>
									<tr>
										<th></th>
										<th>1st</th>
										<th>2ND</th>
										<th>3RD</th>
										<th>4TH</th>
										<th>5TH</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>saturday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>sunday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>monday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>tuesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>wednesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>thurday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>friday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);break;


			case 'hod': return (
				<div>

					<HodHome  />
					<div className='container'>

						<div className="container">
							<table>
								<thead>
									<tr>
										<th></th>
										<th>1st</th>
										<th>2ND</th>
										<th>3RD</th>
										<th>4TH</th>
										<th>5TH</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>saturday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>sunday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>monday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>tuesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>wednesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>thurday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>friday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);break;


			case 'instructor': return (
				<div>

					<InstructorHome  />
					<div className='container'>

						<div className="container">
							<table>
								<thead>
									<tr>
										<th></th>
										<th>1st</th>
										<th>2ND</th>
										<th>3RD</th>
										<th>4TH</th>
										<th>5TH</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>saturday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>sunday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>monday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>tuesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>wednesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>thurday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>friday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);break;



			case 'ta': return (
				<div>

					<TaHome  />
					<div className='container'>

						<div className="container">
							<table>
								<thead>
									<tr>
										<th></th>
										<th>1st</th>
										<th>2ND</th>
										<th>3RD</th>
										<th>4TH</th>
										<th>5TH</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>saturday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>sunday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>monday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>tuesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>wednesday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>thurday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
									<tr>
										<td>friday</td>
										<td>Cell 2</td>
										<td>Cell 3</td>
										<td>Cell 4</td>
										<td>Cell 5</td>
										<td>Cell 5</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			);break;
		}
	
	}
	}
