var myLivingroomEventSource;
var myGuirlandeEventSource;
var myDeskEventSource;
var myMotionEventSource;

function initialize()
{
	myLivingroomEventSource = LivingroomEventSource();
	myLivingroomEventSource.open();
  
	myGuirlandeEventSource = GuirlandeEventSource();
	myGuirlandeEventSource.open();
  
	myDeskEventSource = DeskEventSource();
	myDeskEventSource.open();
  
	myMotionEventSource = MotionEventSource();
	myMotionEventSource.open();
}

function LivingroomEventSource()
{
	// Temporary Datashare API URL
	var livingroomData = streamdataio.createEventSource("https://datashare.orange.com/api/v1/users/me/data/lights/state?pageSize=1&search="+encodeURIComponent('metadata.device=hue:LCT001@001788fffe1769b8#L3')+"",window.streamdatatoken , "");
	
	livingroomData.onData(function(data)
	{
		// initialize your data with the initial snapshot
		//$("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		console.log(data);
		window.livingroom = data;
		console.log(window.livingroom);
		if (window.livingroom[0].value.on == false)
		{ jQuery("#livingroom").addClass("off"); }
		else
		{ jQuery("#livingroom").removeClass("off"); }
		
		changeColor("livingroom", window.livingroom[0].value.color.hue, window.livingroom[0].value.color.saturation, window.livingroom[0].value.color.brightness);
	}).onPatch(function(data)
	{
		// update the data with the provided patch
		// $("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		window.livingroom = jsonpatch.apply_patch(window.livingroom , data);
		console.log(window.livingroom);
		if (window.livingroom[0].value.on == false)
		{ jQuery("#livingroom").addClass("off"); }
		else
		{ jQuery("#livingroom").removeClass("off"); }
		
		changeColor("livingroom", window.livingroom[0].value.color.hue, window.livingroom[0].value.color.saturation, window.livingroom[0].value.color.brightness);
	}).onError(function(data)
	{
		// do whatever you need in case of error
		livingroomData.close();
		//livingroomData.open();
	});
	
	return livingroomData;
}

function GuirlandeEventSource()
{
	// Temporary Datashare API URL
	var guirlandeData = streamdataio.createEventSource("https://datashare.orange.com/api/v1/users/me/data/lights/state?pageSize=1&search="+encodeURIComponent('metadata.device=hue:LST001@001788fffe1769b8#L4')+"", window.streamdatatoken, "");
	
	guirlandeData.onData(function(data)
	{
		// initialize your data with the initial snapshot
		//$("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		console.log(data);
		window.guirlande = data;
		console.log(window.guirlande);
		if (window.guirlande[0].value.on == false)
		{ jQuery("#guirlande").addClass("off"); }
		else
		{ jQuery("#guirlande").removeClass("off"); }
		
		changeColor("guirlande", window.guirlande[0].value.color.hue, window.guirlande[0].value.color.saturation, window.guirlande[0].value.color.brightness);
	}).onPatch(function(data)
	{
		// update the data with the provided patch
		// $("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		window.guirlande = jsonpatch.apply_patch(window.guirlande , data);
		console.log(window.guirlande);
		if (window.guirlande[0].value.on == false)
		{ jQuery("#guirlande").addClass("off"); }
		else
		{ jQuery("#guirlande").removeClass("off"); }
		
		changeColor("guirlande", window.guirlande[0].value.color.hue, window.guirlande[0].value.color.saturation, window.guirlande[0].value.color.brightness);
	}).onError(function(data)
	{
		// do whatever you need in case of error
		guirlandeData.close();
		//guirlandeData.open();
	});
		    
    return guirlandeData;
}

function DeskEventSource()
{
	// Temporary Datashare API URL
	var deskData = streamdataio.createEventSource("https://datashare.orange.com/api/v1/users/me/data/lights/state?pageSize=1&search="+encodeURIComponent('metadata.device=lifx:lifx_original_a21@d073d5001a18')+"", window.streamdatatoken, "");
	
	deskData.onData(function(data)
	{
		// initialize your data with the initial snapshot
		//$("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		console.log(data);
		window.desk = data;
		console.log(window.desk);
		 if (window.desk[0].value.on == false)
		 { jQuery("#desk").addClass("off"); }
		 else
		 { jQuery("#desk").removeClass("off"); }
		 
		changeColor("desk", window.desk[0].value.color.hue, window.desk[0].value.color.saturation, window.desk[0].value.color.brightness);
	}).onPatch(function(data)
	{
		// update the data with the provided patch
		// $("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		window.desk = jsonpatch.apply_patch(window.desk , data);
		console.log(window.desk);
		 if (window.desk[0].value.on == false)
		 { jQuery("#desk").addClass("off"); }
		 else
		 { jQuery("#desk").removeClass("off"); }
		 
		changeColor("desk", window.desk[0].value.color.hue, window.desk[0].value.color.saturation, window.desk[0].value.color.brightness);
	}).onError(function(data)
	{
		// do whatever you need in case of error
		deskData.close();
		//deskData.open();
	});
	
	return deskData;
}

function MotionEventSource()
{
	// Temporary Datashare API URL
	var motionData = streamdataio.createEventSource("https://datashare.orange.com/api/v1/users/me/data/indoor/presence/motion?pageSize=1&search="+encodeURIComponent('metadata.device=homelive:MotionSensor-1@47120286#19')+"", window.streamdatatoken, "");
	
	motionData.onData(function(data)
	{
		// initialize your data with the initial snapshot
		//$("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		console.log(data);
		window.motion = data;
		console.log(window.motion[0].value);
		if (window.motion[0].value == false)
		{ $("#motion").removeClass("in-motion"); }
		else
		{ $("#motion").addClass("in-motion"); }
	}).onPatch(function(data)
	{
		// update the data with the provided patch
		// $("body").append( "<p>"+ JSON.stringify(data)+"</p>" );
		window.motion = jsonpatch.apply_patch(window.motion , data);
		console.log(window.motion);
		
		if (window.motion[0].value == false)
		{ $("#motion").removeClass("in-motion"); }
		else
		{ $("#motion").addClass("in-motion"); }		
	}).onError(function(data)
	{
		// do whatever you need in case of error
		motionData.close();
		//motionData.open();
	});
	
	return motionData;
}

function HSVtoRGB(h, s, v)
{
	var r, g, b, i, f, p, q, t;
	if (arguments.length === 1) {
		s = h.s, v = h.v, h = h.h;
	}
	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);
	switch (i % 6) {
		case 0: r = v, g = t, b = p; break;
		case 1: r = q, g = v, b = p; break;
		case 2: r = p, g = v, b = t; break;
		case 3: r = p, g = q, b = v; break;
		case 4: r = t, g = p, b = v; break;
		case 5: r = v, g = p, b = q; break;
	}
	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
	
}
	
function changeColor(id, h, s, l)
{
	var	rgb = HSVtoRGB( (h/360), s, l);
	
	jQuery("#"+id+" .lamp .light-back").css("background-color", "rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+",1)");
	console.log(h,s,l);
	console.log(rgb);
}
