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

wshshell.sendkeys " Update Failed!"

WScript.sleep 050

WshShell.Run "cmd"

WScript.sleep 200

wshshell.sendkeys " Can't fix! You need to update the software."

WScript.sleep 200

wshshell.sendkeys " Software: Khoi phuc Wifi (v1.1.0)!"

WScript.sleep 200


