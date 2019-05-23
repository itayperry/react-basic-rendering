import React, { Component } from 'react';
import './PopularLanguages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class PopularLanguages extends Component {
	// Nesting objects in each other in the state is a bad bad thing! Don't do it.
	// setState() will not work if we do something like this.setState({github.popular: something})
	// setState() cannot change nested objects :)
	// This example is better off without the "github:{}" thing :)
	state = {
		github: {
				popular_languages: [
			  		{name: 'JavaScript', projects: 2300},
			  		{name: 'Python', projects: 1000},
			  		{name: 'Java', projects: 986},
			  		{name: 'Ruby', projects: 870} ,
			  		{name: 'PHP', projects: 559},
			  		{name: 'C++', projects: 413} ,
			  		{name: 'CSS', projects: 335},
			  		{name: 'C#', projects: 326} ,
			  		{name: 'Go', projects: 285},
					{name: 'C', projects: 239},
					{name: 'TypeScript', projects: 207},
			  		{name: 'Shell', projects: 206},
			  		{name: 'Swift', projects: 107},
			  		{name: 'Scala', projects: 99},
			  		{name: 'Objective-C', projects: 66}
			]
		}
	}
	render() {
		const elements = this.state.github.popular_languages.map((language,index) => 
			<tr key={index}>
				<td className="rank">{index+1}</td>
				<td>{language.name}</td>
				<td>{language.projects}k</td>
	 			<td>Remove me:  
					<FontAwesomeIcon 
						className="delete_icon" 
						icon="trash-alt" 
						onClick={() => {
								let tmpLanguages = {...this.state.github};
								console.log(tmpLanguages)
								tmpLanguages.popular_languages.splice(index, 1);
								this.setState({ github: tmpLanguages })
							}
						}
					/>
				</td>
			</tr>
		)
		return (
			<div>

				<div>
					<table>
						<thead>
							<tr>
								<th>Ranking <FontAwesomeIcon icon="coffee" /></th>
								<th>Name</th>
								<th>Projects/Repos</th>
	 							<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{elements}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default PopularLanguages;

// for a more beautiful answer paste this and uncomment the css - this is based on this guy's work:
// link: https://codepen.io/nikhil8krishnan/pen/WvYPvv
// 			<section>
// 			  <h1>Fixed Table header</h1>
// 			  <div className="tbl-header">
// 			    <table cellPadding="0" cellSpacing="0" border="0">
// 			      <thead>
// 			        <tr>
// 						<th>Ranking</th>
// 						<th>Name</th>
// 						<th>Projects/Repos</th>
// 			        </tr>
// 			      </thead>
// 			    </table>
// 			  </div>
// 			  <div className="tbl-content">
// 			    <table cellPadding="0" cellSpacing="0" border="0">
// 			      <tbody>
// 			      	{elements}
// 			      </tbody>
// 			    </table>
// 			  </div>
// 			</section>



