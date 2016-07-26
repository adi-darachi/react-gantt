var React = require('react');
var ReactDOM = require('react-dom');
var ReactGantt = require('react-gantt');
var moment = require('moment');

var App = React.createClass({
	render () {
		var rows = [
			{
				title: 'Task 1',
				startDate: moment().set({date: 15, month: 8, year: 2016}).toDate(),
				climaxDate: moment().set({date: 20, month: 8, year: 2016}).toDate(),
				endDate: moment().set({date: 28, month: 8, year: 2016}).toDate(),
				group: 'myTasks'
			},
			{
				title: 'Task 2',
				startDate: moment().set({date: 8, month: 8, year: 2016}).toDate(),
				climaxDate: moment().set({date: 13, month: 8, year: 2016}).toDate(),
				endDate: moment().set({date: 19, month: 8, year: 2016}).toDate(),
				group: 'myTasks'
			}
		];
		var options = {
			leftBound: moment().set({hour: 0, date: 1, month: 8, year: 2016}).toDate(),
			rightBound: moment().set({hour: 23, date: 29, month: 8, year: 2016}).toDate(),
			labelWidth: '120px'
		};
		var groups = [
			{
				id: 'myTasks',
				title: 'My Tasks'
			}
		];
		return (
			<div>
				<ReactGantt options={options} groups={groups} rows={rows} />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));