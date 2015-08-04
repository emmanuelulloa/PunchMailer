$(document).ready(function(){
	function loremIpsum(){
		var lorem = {
			'1' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lorem sem. Ut lacus mi, porta in nisl eu, tincidunt sodales lectus. Mauris mattis eget lorem non iaculis. Cras quis turpis ultricies, suscipit neque semper, sagittis diam. Morbi pulvinar venenatis iaculis. Integer tempus ante mauris. Praesent vehicula diam tellus, vel varius tellus dictum a. ',
			'2' : 'Phasellus eget est vel sapien aliquet elementum vel sodales quam. Nullam auctor quam quis elementum pellentesque. Morbi aliquam venenatis dapibus. Etiam id ligula tristique, convallis ligula eu, sodales tortor. Quisque ultricies ipsum sit amet nunc aliquet, eu maximus ipsum ultrices. Quisque eleifend tellus elit, eget auctor lorem tempor et. Quisque scelerisque commodo tellus ut egestas.',
			'3' : 'Nam auctor quam nunc, at congue velit scelerisque eleifend. Cras scelerisque lacus purus, ut mattis odio finibus sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut turpis nulla. Donec tellus orci, eleifend nec mauris sit amet, tincidunt finibus justo. Nam eu congue orci. Mauris non elementum felis, non tincidunt leo.',
			'4' : 'Sed congue, risus sed dapibus accumsan, magna dolor ornare ipsum, nec tincidunt urna justo et nulla. Aliquam erat volutpat. Suspendisse elementum velit nec tellus vehicula lacinia. Pellentesque bibendum commodo congue. Fusce tincidunt nunc sed urna elementum mattis. Etiam sodales risus non mi suscipit, quis tincidunt quam posuere. Vivamus tempus dui in facilisis blandit.',
			'5' : 'Vivamus luctus, lacus sed dapibus efficitur, tortor risus dignissim diam, ut volutpat ligula turpis vel turpis. Aenean feugiat elit et neque placerat, in aliquet est aliquam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a semper justo, nec malesuada tellus. Mauris molestie urna diam, vel sodales neque congue eu.'
		}
		return lorem[Math.ceil(Math.random() * 5)];
	}
	var styleCounter = 0;
	function getRandomStyle(){
		var styles = [
			'font-family: Arial, Helvetica, sans-serif; vertical-align: top; margin: 0; padding: 10px; color: #000000; background-color: #F6BB42;-webkit-box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);',
			'font-family: Arial, Helvetica, sans-serif; vertical-align: top; margin: 0; padding: 10px; color: #FFFFFF; background-color: #8CC152;-webkit-box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);',
			'font-family: Arial, Helvetica, sans-serif; vertical-align: top; margin: 0; padding: 10px; color: #000000; background-color: #4FC1E9;-webkit-box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);',
			'font-family: Arial, Helvetica, sans-serif; vertical-align: top; margin: 0; padding: 10px; color: #FFFFFF; background-color: #ED5565;-webkit-box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);',
			'font-family: Arial, Helvetica, sans-serif; vertical-align: top; margin: 0; padding: 10px; color: #000000; background-color: #AC92EC;-webkit-box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);',
			'font-family: Arial, Helvetica, sans-serif; vertical-align: top; margin: 0; padding: 10px; color: #FFFFFF; background-color: #434A54;-webkit-box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);box-shadow: 4px 4px 15px 0px rgba(50, 50, 50, 0.3);'
		];
		++styleCounter;
		if(styleCounter > styles.length - 1){
			styleCounter = 0;
		}
		return styles[styleCounter];
	}
	function randomColor(){
		return '#' + Math.floor(Math.random()*16777215).toString(16); 
	}
	function getOtherViews(i, qty, el, checked){
		var a = [], c = (checked)?':checked':':not(:checked)';
		for(var j=1; j <= qty; j++){
			if(i != j){
				a.push('#state' + i + c + ' ~ ' + el + j);
			}
		}
		return a.join(', ');
	}
	function createCSS(){
		var s = '',
			_n = '\n',
			_t = '\t';
		var ease = $('#ease_sl').val() || 'ease';
		var duration = $('#duration_txt').val() || '1000';
		var comments = $('#comments_ck').prop('checked');//s += (comments)?'' + _n:'';
		duration += 'ms';
		var fallback = $('#fallback_ck').prop('checked');
		s += (comments)?'/* START BUG FIXES, best not to change these */' + _n:'';
		s += (comments)?'/* Force Outlook to provide a "view in browser" message */' + _n:'';
		s += '#outlook a {padding: 0;}' + _n;
		s += (comments)?'/* Force Hotmail to display emails at full width */' + _n:'';
		s += '.ReadMsgBody {width: 100%; }'  + _n;
		s += (comments)?'/* Force Hotmail to display emails at full width */' + _n:'';
		s += '.ExternalClass {width:100%; }' + _n;
		s += (comments)?'/* Force Hotmail to display normal line spacing */' + _n:'';
		s += '.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }' + _n;
		s += (comments)?'/* Prevent WebKit and Windows mobile changing default text sizes */' + _n:'';
		s += 'body, table, td, a { -webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}' + _n;
		s += (comments)?'/* Remove spacing between tables in Outlook 2007 and up */' + _n:'';
		s += 'table, td { mso-table-lspace: 0pt;mso-table-rspace:0pt;}' + _n;
		s += (comments)?'/* Allow smoother rendering of resized image in Internet Explorer */' + _n:'';
		s += 'img { -ms-interpolation-mode: bicubic;}' + _n;
		s += (comments)?'/* Resolves Outlook 07, 10 and Gmail td padding issue */' + _n:'';
		s += 'table td {border-collapse:collapse;}' + _n;
		s += (comments)?'/* END BUG FIXES */' + _n:'';				
		s += (comments)?'/* START DESKTOP MOBILE TOGGLES */' + _n:'';
		s += (comments)?'/*Hide webkit only section in Outlook 07-13*/' + _n:'';
		s += '#webkit-only, #webkit-only table, #webkit-only tr, #webkit-only td, #webkit-only img, #webkit-only label, #webkit-only input {mso-hide: all;}' + _n;
		s += (fallback)?('#desktop-fallback, .desktop-fallback {display: block !important;}' + _n):'';
		s += (comments)?'/* Global style for mobile devices */' + _n:'';
		s += '@media only screen and (max-width: 480px) {' + _n;
		s += (fallback)?('*[class="desktop-fallback"] {display: none !important;max-height: 0px !important;}' + _n):'';
		s += '}' + _n;
		s += (comments)?'/* Show only on webkit */' + _n:'';
		s += '@media screen and (-webkit-min-device-pixel-ratio: 0) {' + _n;
		s += '#webkit-only { display: block !important; max-height: none !important;}' + _n;
		s += (fallback)?('#desktop-fallback, .desktop-fallback { display: none !important; max-height: 0 !important; font-size: 0;}' + _n):'';
		s += (comments)?'/* END DESKTOP MOBILE TOGGLES */' + _n:'';
		s += (comments)?'/* START PUNCH CARD SCRIPTING */' + _n:'';
		s += 'label {-webkit-user-select: none; user-select: none; cursor: pointer;}' + _n;
		var qtyGrouped = Math.abs(parseInt($('#radiobuttons_txt').val()));
		var qtyToggle = Math.abs(parseInt($('#checkboxes_txt').val()));
		var qtyHover = Math.abs(parseInt($('#links_txt').val()));
		var isCondensed = $('#condense_ck').prop('checked');
		if($('#view_ck').prop('checked')){
			var useTransition = $('#transition_ck').prop('checked');
			var applyStyles = $('#styles_ck').prop('checked');
			var displayMode = $('#display_sl').val();
			var upStateStyle = $('#up_txt').val();
			var downStateStyle = $('#down_txt').val();
			var allowNavigation = $('#nav_ck').prop('checked');
			var allowPagination = $('#paginator_ck').prop('checked');
			var allowToggle = $('#toggle_ck').prop('checked');
			var defaultDisplay = (displayMode.indexOf('absolute') !== -1)?'display: block; ':'';
			var transitionPropsOn  = '';
			var transitionPropsOff = '';
			var transitionType = displayMode;//'display : block;'
			var transitionIn  = $('#transition_sl').val().split('|')[0];
			var transitionOut = $('#transition_sl').val().split('|')[1];
			//***
			var toggleHoverDisplay = displayMode;//'display: inline-block;'
			if(useTransition){
				transitionPropsOn  = transitionIn + '-webkit-backface-visibility: hidden;'; 
				transitionPropsOff = transitionOut + '-webkit-backface-visibility: hidden;';
			}
			var viewTransition = '';
			if(useTransition){
				viewTransition = 'all '+duration+' '+ease+';';
			}
			//HOVER STATES
			if(qtyHover){
				var hoverClasses = [];
				s += (comments)?'/* Hover States functionality */' + _n:'';
				if(isCondensed){
					var hoverCondensedClasses1 = [];
					var hoverCondensedClasses2 = [];
					for(var i = 1; i <= qtyHover; i++){
						hoverCondensedClasses1.push('#hover-state' + i + ':hover ~ #views .hover-view' + i);
						hoverCondensedClasses2.push('#views .hover-view' + i);
						hoverClasses.push('#views .hover-view' + i );
					}
					if(useTransition){
						s += hoverCondensedClasses1.join(', ') + '{' + transitionPropsOn + '}' + _n;
						s += hoverCondensedClasses2.join(', ') + '{' + displayMode + transitionPropsOff + '}' + _n;
					}else{
						s += hoverCondensedClasses1.join(', ') + '{' + defaultDisplay + displayMode + '}' + _n;
						s += hoverCondensedClasses2.join(', ') + '{display: none;}' + _n;
					}
				}else{
					for(var i = 1; i <= qtyHover; i++){
						if(useTransition){
							s += '#hover-state' + i + ':hover ~ #views .hover-view' + i + '{' + transitionPropsOn + '}' + _n;
							s += '#views .hover-view' + i + '{' + displayMode + transitionPropsOff + '}' + _n;
						}else{
							s += '#hover-state' + i + ':hover ~ #views .hover-view' + i + '{' + defaultDisplay + displayMode + '}' + _n;
							s += '#views .hover-view' + i + '{display: none;}' + _n;
						}
						hoverClasses.push('#views .hover-view' + i );
					}				
				}
				if(useTransition){
					s += hoverClasses.join(', ') + '{' + displayMode + 'transition:' + viewTransition + ' -webkit-transition: ' + viewTransition + '}' + _n;
				}else{
					s += hoverClasses.join(', ') + '{ display: none; }' + _n;
				}				
				if(applyStyles){
					s += '.hover-button { display: inline-block; ' + upStateStyle + ' }' + _n;
					s += '.hover-button:hover, .hover-button:focus, .hover-button:active {' + downStateStyle + '}' + _n;
				}
			}
			//GROUPED STATES
			if(qtyGrouped){
				var groupedClasses = [];
				s += (comments && qtyGrouped)?'/* Grouped States functionality */' + _n:'';
				if(isCondensed){
					var groupedCondensedClasses1 = [];
					var groupedCondensedClasses2 = [];
					for(var i = 1; i <= qtyGrouped; i++){
						groupedCondensedClasses1.push('#state' + i + ':checked ~ #views .view' + i);
						groupedCondensedClasses2.push(getOtherViews(i, qtyGrouped, '#views .view', true));
						groupedClasses.push('#views .view' + i );
					}
					if(useTransition){
						s += groupedCondensedClasses1.join(', ') + '{' + displayMode + transitionPropsOn + '}' + _n;
						s += groupedCondensedClasses2.join(', ') + '{' + transitionPropsOff + '}' + _n;
					}else{
						s += groupedCondensedClasses1.join(', ') + '{' + defaultDisplay + displayMode + '}' + _n;
						s += groupedCondensedClasses2.join(', ') + '{ display: none; }' + _n;
					}
				}else{
					for(var i = 1; i <= qtyGrouped; i++){
						if(useTransition){
							s += '#state' + i + ':checked ~ #views .view' + i + '{' + displayMode + transitionPropsOn + '}' + _n;
							var otherStates = getOtherViews(i, qtyGrouped, '#views .view', true);
							s += otherStates + '{' + transitionPropsOff + '}' + _n;
						}else{
							s += '#state' + i + ':checked ~ #views .view' + i + '{' + defaultDisplay + displayMode + '}' + _n;
							var otherStates = getOtherViews(i, qtyGrouped, '#views .view', true);
							s += otherStates + '{ display: none; }' + _n;
						}
						groupedClasses.push('#views .view' + i );
					}
				}
				if(useTransition){
					s += groupedClasses.join(', ') + '{' + defaultDisplay + displayMode + 'transition:' + viewTransition + ' -webkit-transition: ' + viewTransition + '}' + _n;
				}else{
					s += groupedClasses.join(', ') + '{' + defaultDisplay + displayMode + '}' + _n;
				}
				if(isCondensed){
					var prevCondensed = [];
					var nextCondensed = [];
					var navCondensed = [];
					for(var i = 1; i <= qtyGrouped; i++){
						if(allowNavigation){
							prevCondensed.push('#state' + i + ':checked ~ .prev' + i);
							nextCondensed.push('#state' + i + ':checked ~ .next' + i);
						}
						if(allowPagination){
							navCondensed.push('#state' + i + ':checked ~ .nav' + i);
						}
					}
					if(allowNavigation){
						s += prevCondensed.join(', ') + ', ' + nextCondensed.join(', ') + ' { display : inline-block !important; }' + _n;
					}
					if(allowPagination){
						s += navCondensed.join(', ') + ' { ' + downStateStyle + ' }' + _n;
					}
				}else{
					for(var i = 1; i <= qtyGrouped; i++){
						if(allowNavigation){
							s += '#state' + i + ':checked ~ .prev' + i + ' { display : inline-block !important; }' + _n;
							s += '#state' + i + ':checked ~ .next' + i + ' { display : inline-block !important; }' + _n;
						}
						if(allowPagination){
							s += '#state' + i + ':checked ~ .nav' + i + ' { ' + downStateStyle + ' }' + _n;
						}
					}
				}
				if(applyStyles && allowNavigation){
					s += '.prev-button, .next-button { ' + upStateStyle + ' }' + _n;
					s += '.prev-button:hover, .prev-button:focus, .prev-button:active, .next-button:hover, .next-button:focus, .next-button:active {' + downStateStyle + '}' + _n;
				}
				if(applyStyles && allowPagination){
					s += '.nav-button {' + upStateStyle +'}' + _n;
				}
			}
			//TOGGLE STATES
			if(qtyToggle){
				var toggleClasses = [];
				var togglePosition = $('#before_ck').prop('checked')?'::before':'';
				s += (comments && qtyToggle)?'/* Toggle States functionality */' + _n:'';
				if(isCondensed){
					var toggleCondensedClasses1 = [];
					var toggleCondensedClasses2 = [];
					var toggleCondensedClasses3 = [];
					var toggleCondensedClasses4 = [];
					for(var i = 1; i <= qtyToggle; i++){
						toggleCondensedClasses1.push('#toggle-state' + i + ':checked ~ #views .toggle-view' + i);
						toggleCondensedClasses2.push('#toggle-state' + i + ':not(:checked) ~ #views .toggle-view' + i);
						toggleClasses.push('#views .toggle-view' + i);				
					}
					if(useTransition){
						s += toggleCondensedClasses1.join(', ') + '{' + displayMode + transitionPropsOn + '}' + _n;
						s += toggleCondensedClasses2.join(', ') + '{' + displayMode + transitionPropsOff + '}' + _n;
					}else{
						s += toggleCondensedClasses1.join(', ') + '{' + defaultDisplay + displayMode +'}' + _n;
						s += toggleCondensedClasses2.join(', ') + '{ display: none; }' + _n;
					}
					if(allowToggle){
						for(var i = 1; i <= qtyToggle; i++){
							if(togglePosition != ''){
								var toggleTextON  = 'content: "Toggle ' + i + ' is ON "; ';
								var toggleTextOFF = 'content: "Toggle ' + i + ' is OFF"; ';
								s += '#toggle-state' + i + ':checked ~ .toggle' + i + togglePosition + '{ ' + toggleTextON + downStateStyle + ' }' + _n;
								s += '#toggle-state' + i + ':not(:checked) ~ .toggle' + i + togglePosition + '{ ' + toggleTextOFF + upStateStyle + ' }' + _n;
								
							}else{
								toggleCondensedClasses3.push('#toggle-state' + i + ':checked ~ .toggle' + i);
								toggleCondensedClasses4.push('#toggle-state' + i + ':not(:checked) ~ .toggle' + i);
							}	
						}
						if(togglePosition == ''){
							s += toggleCondensedClasses3.join(', ') + '{ ' + downStateStyle + ' }' + _n;
							s += toggleCondensedClasses4.join(', ') + '{ ' + upStateStyle + ' }' + _n;
						}
					}
				}else{
					for(var i = 1; i <= qtyToggle; i++){
						if(useTransition){
							s += '#toggle-state' + i + ':checked ~ #views .toggle-view' + i + '{' + displayMode + transitionPropsOn + '}' + _n;
							s += '#toggle-state' + i + ':not(:checked) ~ #views .toggle-view' + i + '{' + displayMode + transitionPropsOff + '}' + _n;
						}else{
							s += '#toggle-state' + i + ':checked ~ #views .toggle-view' + i + '{' + defaultDisplay + displayMode +'}' + _n;
							s += '#toggle-state' + i + ':not(:checked) ~ #views .toggle-view' + i + '{ display: none; }' + _n;
						}
						if(allowToggle){
							var toggleTextON  = (togglePosition == '')?'':'content: "Toggle ' + i + ' is ON "; ';
							var toggleTextOFF = (togglePosition == '')?'':'content: "Toggle ' + i + ' is OFF"; ';
							s += '#toggle-state' + i + ':checked ~ .toggle' + i + togglePosition + '{ ' + toggleTextON + downStateStyle + ' }' + _n;
							s += '#toggle-state' + i + ':not(:checked) ~ .toggle' + i + togglePosition + '{ ' + toggleTextOFF + upStateStyle + ' }' + _n;
						}
						toggleClasses.push('#views .toggle-view' + i);
					}
				}
				if(useTransition){
					s += toggleClasses.join(', ') + '{' + displayMode + 'transition:' + viewTransition + ' -webkit-transition: ' + viewTransition + '}' + _n;
				}else{
					s += toggleClasses.join(', ') + '{ display: none; }' + _n;
				}
				if(applyStyles && allowToggle){
					s += '.toggle-button' + togglePosition + '{ display: inline-block;' + upStateStyle +'}' + _n;
				}	
			}
		}
		s += '}' + _n;
		return s;
	}
	//HTML
	function createHTML(){
		var s = '',
			_n = '\n',
			_t = '\t';
		var width = $('#width_txt').val() || '320';
		var height = $('#height_txt').val() || '372';
		if(!isNaN(parseInt(width))){
			if(width.indexOf('px') == -1){
				if(width.indexOf('%') == -1){
					width += 'px'
				}
			}
		}
		if(!isNaN(parseInt(height))){
			if(height.indexOf('px') == -1){
				if(height.indexOf('%') == -1){
					height += 'px'
				}
			}	
		}
		var comments = $('#fallback_ck').prop('checked');
		s += '<!DOCTYPE html>' + _n;
		s += '<html lang="en">' + _n;
		s += '<head>' + _n;
		s += '<meta charset="UTF-8">' + _n;
		s += '<title>Subject Line: PunchMailer Template</title>' + _n;
		s += '<meta name="viewport" content="width=device-width">' + _n;
		s += '<style type="text/css">' + _n;
		s += createCSS();
		s += '</style>' + _n;
		s += '</head>' + _n;
		s += '<body style="margin: 0; padding: 0;">' + _n;
		//webkit-only
		s += '<!--[if !mso 9]><!-->' + _n;
		s += '<div id="webkit-only" style="max-height: 0; overflow: hidden; display: none;">' + _n;
		s += _t + '<div style="width:100%; margin: 0; padding:10px;">' + _n;
		var qtyGrouped = parseInt($('#radiobuttons_txt').val());
		var qtyToggle = parseInt($('#checkboxes_txt').val());
		var qtyHover = parseInt($('#links_txt').val());
		//radio buttons
		for(var i = 1; i <= qtyGrouped; i++){
			var isFirst = (i == 1)? ' checked ':' ';
			s += _t + '<input type="radio" id="state' + i +'" name="group1" style="display:none;"' + isFirst + '/>' + _n;
		}
		//checkboxes
		for(var i = 1; i <= qtyToggle; i++){
			s += _t + '<input type="checkbox" id="toggle-state' + i +'" style="display:none;" checked />' + _n;
		}
		//hovers
		//create hover buttons
		if(qtyHover){
			for(var i = 1; i <= qtyHover; i++){
				s += _t + '<a href="#" id="hover-state' + i + '" class="hover-button">Hover ' + i +'</a>' + _n;
			}
		}
		//create controls
		if($('#nav_ck').prop('checked') || $('#paginator_ck').prop('checked') || qtyToggle){
			//s += _t + '<div id="controls" style="width:100%; margin: 0; padding:10px;">' + _n;style="position: absolute; top: '+height+'; left: 0; right: 0; margin: 0 auto; text-align: center;"
			//create prev button
			if($('#nav_ck').prop('checked')){
				for(var i = 1; i <= qtyGrouped; i++){
					var prevPosition = (i == 1)?(($('#loop_ck').prop('checked'))?qtyGrouped:i):i-1;
					var labelTarget = 'state' + prevPosition;
					s += _t + '<label for="' + labelTarget + '" class="prev-button prev' + i + '" style ="display:none;" >&lt; PREV</label>' + _n;
				}
			}
			//create paginator buttons
			if($('#paginator_ck').prop('checked')){
				for(var i = 1; i <= qtyGrouped; i++){
					var isFirst = (i == 1)?'':'';
					s += _t + '<label for="state' + i + '" class="nav-button nav' + i +'" style="display:inline-block;" >' + i + '</label>' + _n;
				}
			}
			//create next button
			if($('#nav_ck').prop('checked')){
				for(var i = 1; i <= qtyGrouped; i++){
					var nextPosition = (i == qtyGrouped)?(($('#loop_ck').prop('checked'))?1:qtyGrouped):i+1;
					var labelTarget = 'state' + nextPosition;
					s += _t + '<label for="' + labelTarget + '" class="next-button next' + i + '" style ="display:none;" >NEXT &gt;</label>' + _n;
				}
			}
			//create toggle buttons
			if(qtyToggle){
				var doNotUseText = $('#before_ck').prop('checked');
				for(var i = 1; i <= qtyToggle; i++){
					s += _t + '<label for="toggle-state' + i + '" class="toggle-button toggle' + i + '">'+(doNotUseText?'':'Toggle ' + i)+'</label>' + _n;
				}
			}
			//s += _t + '</div>' + _n;
		}
		//create views
		if($('#view_ck').prop('checked')){
			//states
			s += _t + '<div id="views" style="clear: both; padding: 5px; margin: 0;">' + _n;// style="position: absolute; top: 0px; left: 0; right: 0; margin: 0 auto;"
			for(var i = 1; i <= qtyGrouped; i++){
				s += _t + _t +  '<div class="view' + i + '" style="' + getRandomStyle() + ' width: ' + width + '; height: ' + height + ';"><h1>View ' + i + '</h1><p>' + loremIpsum() + '</p></div>' + _n;
			}
			//toggle states
			for(var i = 1; i <= qtyToggle; i++){
				s += _t + _t +  '<div class="toggle-view' + i + '" style="' + getRandomStyle() + ' width: ' + width + '; height: ' + height + ';"><h1>Toggle ' + i + '</h1><p>' + loremIpsum() + '</p></div>' + _n;
			}
			//hover states
			for(var i = 1; i <= qtyHover; i++){
				s += _t + _t +  '<div class="hover-view' + i + '" style="' + getRandomStyle() + ' width: ' + width + '; height: ' + height + ';"><h1>Hover ' + i + '</h1><p>' + loremIpsum() + '</p></div>' + _n;
			}
			s += _t + '</div>' + _n;
		}
		s += _t + '</div>' + _n;
		s += '</div>' + _n;
		s += '<!--<![endif]-->' + _n;
		//create fallback
		if($('#fallback_ck').prop('checked')){
			s += '<div id="desktop-fallback" class="desktop-fallback">' + _n;
			s += _t + '<div style="vertical-align: top;background-color: #CCCCCC; width: '+width+'; height: '+height+'; border: 1px solid black;"><h1 style="padding: 5px;">Fallback View</h1><p style="padding: 5px;">' + loremIpsum() + '</p></div>' + _n;
			s += '</div>' + _n; 
		}
		s += '</body>' + _n;
		s += '</html>' + _n;
		return s;
	}
	$('#view_ck').change(function(evt){
		//evt.stopPropagation();
		var val = $(this).prop('checked');
		if(val){
			$('#fallback_ck').removeAttr('disabled');
			$('#transition_ck').removeAttr('disabled');
			$('#width_txt').removeAttr('disabled');
			$('#height_txt').removeAttr('disabled');
			$('#ease_sl').removeAttr('disabled');
			$('#size_sl').removeAttr('disabled');
			$('#display_sl').removeAttr('disabled');
			$('#transition_sl').removeAttr('disabled');
			$('#duration_txt').removeAttr('disabled');
			$('#paginator_ck').removeAttr('disabled');
			$('#nav_ck').removeAttr('disabled');
			$('#loop_ck').removeAttr('disabled');
			$('#toggle_ck').removeAttr('disabled');
			$('#before_ck').removeAttr('disabled');
		}else{
			$('#transition_ck').attr('disabled', true).attr('checked', false);
			$('#fallback_ck').attr('disabled', true).attr('checked', false);
			$('#width_txt').attr('disabled', true);
			$('#height_txt').attr('disabled', true);
			$('#ease_sl').attr('disabled', true);
			$('#size_sl').attr('disabled', true);
			$('#display_sl').attr('disabled', true);
			$('#transition_sl').attr('disabled', true);
			$('#duration_txt').attr('disabled', true);
			$('#paginator_ck').attr('disabled', true).attr('checked', false);
			$('#nav_ck').attr('disabled', true).attr('checked', false);
			$('#loop_ck').attr('disabled', true).attr('checked', false);
			$('#toggle_ck').attr('disabled', true).attr('checked', false);
			$('#before_ck').attr('disabled', true).attr('checked', false);
		}
	});
	$('#radiobuttons_txt').change(function(evt){
		var $this = $(this);
		if(parseInt($this.val()) < 1){
			$('#checkboxes_txt').val('1');
		}
	});
	$('#checkboxes_txt').change(function(evt){
		var $this = $(this);
		if(parseInt($this.val()) < 1){
			$('#links_txt').val('1');
		}
	});
	$('#size_sl').change(function(evt){
		var raw = $(this).val().split('x');
		$('#width_txt').val(raw[0]);
		$('#height_txt').val(raw[1]);
	});
	function getButtonStyleEvent(){
		var up = '',
			down = '',
			design = $('#design_sl').val(),
			color = $('#color_sl').val(),
			textcolor = $('#textcolor_sl').val(),
			fontfamily = $('#fontfamily_sl').val(),
			fontsize = $('#fontsize_txt').val(),
			bold = $('#bold_ck').prop('checked'),
			outline = $('#outline_rb').prop('checked'),
			$up = $('#up_txt'),
			$down = $('#down_txt');
		var designPresets = {
			square 		: 'display:inline-block; padding: 8px; margin: 3px; ',
			menu		: 'display:inline-block; padding: 5px; margin: 0; float: left; ',
			round  		: 'display:inline-block; padding: 8px; margin: 3px; border-radius: 5px; ',
			pill   		: 'display:inline-block; padding: 10px; margin: 5px; border-radius: 20px; ',
			tab   		: 'display:inline-block; padding: 10px; margin: 0; float: left; border-top-right-radius: 20px; border-top-left-radius: 5px; ',
			roundtab    : 'display:inline-block; padding: 10px; margin: 0; float: left; border-top-right-radius: 15px; border-top-left-radius: 15px; ',
			inverse		: 'display:inline-block; padding: 10px; margin: 0 0 8px; float: left; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px; ',
			boxcutter	: 'display:inline-block; padding: 10px; margin: 5px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; '
		};
		var colors = color.split(',');
		var borderUp = 'border: ' + ((bold)?'2px':'1px') + ' solid ' + colors[0] + ';';
		var borderDown = 'border: ' + ((bold)?'2px':'1px') + ' solid transparent;';
		up += 'font-size: ' + fontsize + 'px; ';
		up += 'font-family: ' + fontfamily + '; ';
		if(outline){
			up += 'color: ' + colors[0] + '; background-color: #ffffff; ' + borderUp;
		}else{
			up += 'color: '+((textcolor === 'color')?'color: ' + colors[1] + '; ':'color: ' + textcolor+ '; ')+'; background-color: ' + colors[1] + '; ';
		}
		up += bold ? 'font-weight: bold;':'';
		up += 'text-decoration: none; transition: all 300ms ease-out; -webkit-transition: all 300ms ease-out; ';
		up += designPresets[design];
		if(outline){
			down += 'background-color: ' + colors[0] + '; ' + borderDown + ' ';
		}else{
			down += 'background-color: ' + colors[0] + '; ';
		}
		down += (textcolor === 'color')?'color: ' + colors[1] + '; ':'color: ' + textcolor+ '; ';
		$up.val(up);
		$down.val(down);
	};
	getButtonStyleEvent();
	$('#design_sl, #color_sl, #textcolor_sl, #fontfamily_sl, #fontsize_txt, #bold_ck, #outline_rb, #fill_rb').change(getButtonStyleEvent);
	$('#create_btn').click(function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		$('#code_txt').val(createHTML());
		$('#code_txt').select();
		var iframeDoc = document.getElementById('renderFrame').contentDocument || document.getElementById('renderFrame').document;
		console.log(iframeDoc);
		iframeDoc.body.innerHTML = $('#code_txt').val();
	});
});