Set WshShell = WScript.CreateObject("WScript.Shell")

strName = wshShell.ExpandEnvironmentStrings( "%USERNAME%" )

WshShell.Run "cmd"

WScript.sleep 200

wshshell.sendkeys " Check for update"

WScript.sleep 200

wshshell.sendkeys "."

WScript.sleep 500

wshshell.sendkeys "."

WScript.sleep 500

wshshell.sendkeys "."

WScript.sleep 500

wshshell.sendkeys " Cannot Update!"

WshShell.Run "cmd"

WScript.sleep 200

wshshell.sendkeys "Error 3K7645263"

wshshell.sendkeys ". (This version are too old to run or end of support)"

WScript.sleep 200
