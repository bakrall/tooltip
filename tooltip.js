const selectors = {
  tooltip: '.tooltip-container',
  tooltipButton: '.tooltip-button',
  tooltipMessage: '.tooltip-message'
}

class Tooltip {
  constructor(tooltip) {
    this.$elem = $(tooltip);
    this.$tooltipButton = this.$elem.find(selectors.tooltipButton);
    this.$tooltipMessage = this.$elem.find(selectors.tooltipMessage);
    this.$tooltipMessageText = this.$tooltipButton.attr('data-tooltip-content');

    this.bindUiEvents();
  }

  bindUiEvents() {
    $(document).on('click', (event) => this.closeOnOutsideClick(event));
    this.$tooltipButton.on('click', () => this.showTooltipMessage());
    this.$tooltipButton.on('blur', () => this.hideTooltip());
  }

  showTooltipMessage() {
    this.$tooltipMessage
      .text(this.$tooltipMessageText)
      .addClass('shown-message');
  }

  hideTooltip() {
    this.$tooltipMessage
      .text('')
      .removeClass('shown-message');
  }

  closeOnOutsideClick(event) {
    if (!$(event.currentTarget).closest(this.$elem)) {
      this.hideTooltip();
    }
  }
}


//class in another file
const tooltip = $('.tooltip-container');

tooltip.each(function(index, item) {
  new Tooltip(item);
})