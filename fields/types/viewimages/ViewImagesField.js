var _ = require('underscore'),
	React = require('react'),
	Field = require('../Field');

var Thumbnail = React.createClass({
	
	displayName: 'ViewImagesField',
	
	render: function() {
		var iconClassName, imageDetails;

		var previewClassName = 'image-preview';
		
		var title = '';
		var width = this.props.width;
		var height = this.props.height;
		var styles = {
			height: '90'
		};
		if (width && height) {
			title = width + ' x ' + height;
			styles = {
				width:  width,
				height: height
			};
		}
		var actionLabel = this.props.deleted ? 'Undo' : 'Remove';

		var imgUrl = this.props.url + this.props._id;
		return (
			<div className='image-field image-sortable row col-sm-3 col-md-12' title={title}> 
				<div className={previewClassName}> 
					<a href={imgUrl} className='img-thumbnail' target='_view'>
						<img style={styles} className='img-load' src={imgUrl} />
						<span className={iconClassName} />
					</a>
				</div>

				
			</div>
		);
	}
	
});

module.exports = Field.create({

	getInitialState: function() {
		var thumbnails = [];
		var self = this;
		var url = this.props.paths.src;
		var width = this.props.paths.width;
		var height = this.props.paths.height;
		_.each(this.props.value, function (item) {
			item.url = url;
			item.width = width;
			item.height = height;
			self.pushThumbnail(item, thumbnails);
		});

		return { thumbnails: thumbnails };
	},

	pushThumbnail: function (args, thumbs) {
		thumbs = thumbs || this.state.thumbnails;
		var i = thumbs.length;
		thumbs.push(<Thumbnail key={i} {...args} />);
	},

	renderContainer: function() {
		return (
			<div className='images-container clearfix'>
				{this.state.thumbnails}
			</div>
		);
	},
	
	renderUI: function() {
		return (
			<div className='field field-type-cloudinaryimages'>
				<label className='field-label'>{this.props.label}</label>

				<div className='field-ui'>
					{this.renderContainer()}
				</div>
			</div>
		);
	}
});
