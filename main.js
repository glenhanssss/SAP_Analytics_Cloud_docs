//1 how to set an widget visible
Chart_name.setVisible(false);
Table_name.setVisible(true);
widget_name.setVisible(false);

//2 set filter

// we always access Datasource through Widgets only not as standlone datasoure.

// setting a filter on Table dimension
Table_name.getDataSource().setDimensionFilter("movie_genres", "Action");

// remove filter on Table dimension
Table_name.getDataSource().removeDimensionFilter("movie_genres");

//4 Dropdown list

// In the initialization script, populate the Dimension values to widget.
var dropdown_movie_genres =
  Table_name.getDataSource().getMembers("movie_genres");

for (var i = 0; i < dropdown_movie_genres.length; i++) {
  Dropdown_1.addItem(dropdown_movie_genres[i].id);
}

// On Click Event for the Dropdown box
var selecteval = Dropdown_1.getSelectedKey();

Table_name.getDataSource().setDimensionFilter("movie_genres", selecteval);

//5 Warning message
Application.showMessage(ApplicationMessageType.Warning, "Invalid action");

//

// show and hide widgets
if (ShowTable === false) {
  Chart_1.setVisible(true);
  Chart_2.setVisible(false);
  ShowTable = true;
} else {
  Chart_1.setVisible(false);
  Chart_2.setVisible(true);
  ShowTable = false;
}
  
//

//

//

//

//

//
