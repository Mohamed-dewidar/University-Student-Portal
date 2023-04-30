const styles = (theme) => ({
    list : {
      
        backgroundColor: '#232f3e',
       
    },
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: '#ffab00',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: 10,
      fontSize: 20,
    
    },
    test : {
      maxHeight : 2000,
      backgroundColor: '#232f3e',
      color: '#ffab00',
      maxWidth : 1000,
    },
   
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#232f3e',
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
      color: '#ffab00',

    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    paper: {
        maxWidth: 1000,
        margin: 'auto',
        overflow: 'hidden',
      },
      searchBar: {
        backgroundColor: '#232f3e',
      },
      searchInput: {
        fontSize: theme.typography.fontSize,
      },
      block: {
        display: 'block',
        
      },
      addUser: {
        marginRight: theme.spacing(),
        backgroundColor: '#232f3e',
        color: '#ffab00',
      },
      contentWrapper: {
        margin: '40px 16px',
      },
      icon : {
            color: '#ffab00',
          fontSize: '40px',


      },
      guc : {
        maxWidth : 150,
        height : 50
        
      },
      gucGrid : {
        alignItems : 'right'
      }
  });

  export default styles