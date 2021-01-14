import MUIContainer from '@material-ui/core/Container';

const Container = ({ children, maxWidth='lg' }) => {
	return (
		<MUIContainer maxWidth={maxWidth}>
			{children}
		</MUIContainer>
	);
};

export default Container;