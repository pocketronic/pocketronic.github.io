/* ExtraContent r1.3 02-23-09 12:33 */jQuery.noConflict(); jQuery(document).ready(function($){ var i=0; while (i<=10) { $('#myExtraContent'+i+' script').remove(); $('#myExtraContent'+i).appendTo('#extraContainer'+i); i++; } });