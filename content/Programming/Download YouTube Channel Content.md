yt-dlp has a way to **get transcripts** but it virtually never works for me, so I resorted to using **whisper** to transcribe from **.mp3**.
	 *`yt-dlp --skip-download --sub-langs "en" --write-subs "https://www.youtube.com/o1jrM-qPYI0&t=7224s"`
	 I tried several other libraries with varying degrees of success. None of them are 100% reliable because they (usually) just simply don't break, have limitations (like mp3 to transcript using some API service has chunk size limitations, which is annoying), or are dependent upon external things (such as YouTube transcript settings being enabled).*

So instead, I use yt-dlp to download  MP3's and use Whisper to transcribe it.

1) Install yt-dlp
	[yt-dlp/yt-dlp: A feature-rich command-line audio/video downloader (github.com)](https://github.com/yt-dlp/yt-dlp)
	[Can someone please post a simple guide on making yt-dlp work? : r/youtubedl (reddit.com)](https://www.reddit.com/r/youtubedl/comments/qzqzaz/can_someone_please_post_a_simple_guide_on_making/)

2) Download an entire YouTube channel as MP3s in one command.
`yt-dlp -x --audio-format mp3 "https://www.youtube.com/@[ChannelName]"`

3) Install Whisper - [Transcribing Audio mp3 files with Python and OpenAI's Whisper Model (christophergs.com)](https://christophergs.com/blog/ai-podcast-transcription-whisper), [How to Install & Use Whisper AI Voice to Text (youtube.com)](https://www.youtube.com/watch?v=ABFqbY_rmEk)
	1) Install Python.
	2) Install PyTorch - [PyTorch](https://pytorch.org/)
	3) Install Chocolatey - [Chocolatey Software | Chocolatey - The package manager for Windows](https://chocolatey.org/)
		1) Use choco to install ffmpeg
			1) `choco install ffmpeg`
		2) Use pip to install Whisper
			1) `pip install -U openai-whisper`

(optional) for converting files between various video & audio formats (mp4 / mkv, mp3, etc) I use ffmpeg from Windows command line. (I sometimes have problems with the python-ffmpeg library).
https://ffmpeg.org/download.html#build-windows
source: https://www.youtube.com/watch?v=26Mayv5JPz0
to convert file format:
Examples:
`ffmpeg -i in.mkv out.mp4` example video to video
`ffmpeg -i in.mp4 out.mp3` example video to audio
etc.
