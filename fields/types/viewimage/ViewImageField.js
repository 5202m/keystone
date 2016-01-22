var React = require('react'),
	Field = require('../Field');

module.exports = Field.create({
	
	displayName: 'ViewImageField',
	
	renderField: function() {
		var styles = {
			height: this.props.height
		};
		
		var iconClassName;
		var previewClassName = 'image-preview';
		var imgUrl = this.props.paths.src + this.props.value;
		
		return (
			<div className='field field-type-cloudinaryimages'>
				<div className='field-ui'>
					<div className='images-container clearfix'>
						<div className='image-field image-sortable row col-sm-3 col-md-12'> 
							<div className={previewClassName}> 
								<a href={imgUrl} className='img-thumbnail' target='_view'>
									<img style={styles} className='img-load' src={imgUrl} />
									<span className={iconClassName} />
								</a>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		);
		
	}
	
});
