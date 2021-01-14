import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  summaryText: {
    width: '100%',
  },
  detailsText: {
    opacity: 0.5,
    width: '100%',
  },
};

/**
 * Expandable component with header text (summary) and expandable description text (details)
 */
class ExpandableListItem extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && nextProps.scrollToSelected) {
      // @material-ui/core encourages ReactDOM until React find better way
      // https://@material-ui/core.com/getting-started/frequently-asked-questions/#how-can-i-access-the-dom-element-
      ReactDOM.findDOMNode(this).scrollIntoView(nextProps.scrollOptions || { behavior: 'smooth', block: 'center' })
    }
  }

  render() {
    const {
      classes,
      panelClass,
      details,
      selected,
      summary,
      AccordionDetailsProps,
      AccordionDetailsTypographyProps,
      AccordionMoreIconProps,
      AccordionProps,
      AccordionSummaryProps,
      AccordionSummaryTypographyProps,
      SelectedAccordionProps,
    } = this.props;

    const rootProps = selected
      ? { ...AccordionProps, ...SelectedAccordionProps }
      : AccordionProps;

    return (
      <Accordion className={panelClass && panelClass} {...rootProps} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon {...AccordionMoreIconProps} />}
          {...AccordionSummaryProps}
        >
          <Typography
            classes={{
              root: classes.summaryText,
            }}
            gutterBottom
            variant="subtitle1"
            {...AccordionSummaryTypographyProps}
          >
            {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails {...AccordionDetailsProps}>
          <Typography
            classes={{
              root: classes.detailsText,
            }}
            gutterBottom
            component="div"
            {...AccordionDetailsTypographyProps}
          >
            {details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
  }
}

export default withStyles(styles)(ExpandableListItem)
