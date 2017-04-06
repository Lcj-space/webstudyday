/**
 * Created by 13675 on 2017/4/6.
 */
// alert('我的webpack成功之路');
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = React.createClass({
    render:function render() {
        return <div>Hello{this.props.name}</div>;
    }
});
ReactDOM.getElementById('AppRoot');