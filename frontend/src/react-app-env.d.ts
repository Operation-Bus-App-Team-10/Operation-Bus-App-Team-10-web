describe('The main app', () => {

    it('should render the Home link', () => {
        render(<App />); 
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

});
