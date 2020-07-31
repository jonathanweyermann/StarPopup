import React from 'react';
import StarIcon from '@material-ui/icons/Star';

export default function stars({ count = 1, total = 5 }) {
	let starBuilder = [];
	let index = 0;
	let color = '#fead2f';
	for (index=0; index < total; index++) {
		if (index >= count) {
			color = 'grey';
		}
		starBuilder.push(
			<StarIcon style={{color: color, fontSize: '15'}}/>
		)
	}
	return starBuilder;
}
