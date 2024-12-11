function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65pENJXuEMG":
        Script1();
        break;
      case "6eAYCQyNqME":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

function Script2()
{
  var audio = document.getElementById('bgSongku'); 
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.4;
}

