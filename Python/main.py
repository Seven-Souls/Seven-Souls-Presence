import discord_rpc
import time

if __name__ == '__main__':
    def readyCallback(current_user):
        print('Our user: {}'.format(current_user))

    def disconnectedCallback(codeno, codemsg):
        print('Disconnected from Discord rich presence RPC. Code {}: {}'.format(
            codeno, codemsg
        ))

    def errorCallback(errno, errmsg):
        print('An error occurred! Error {}: {}'.format(
            errno, errmsg
        ))

    # Note: 'event_name': callback
    callbacks = {
        'ready': readyCallback,
        'disconnected': disconnectedCallback,
        'error': errorCallback,
    }
    discord_rpc.initialize('692341410820653076', callbacks=callbacks, log=False)

    i = 0
    start = time.time()
    while i < 10:
        i += 1

        discord_rpc.update_presence(
            **{
                'details': 'Team Anti-Raid',
                'state': 'Bot Multifonction',
                'start_timestamp': start,
                'large_image_key': 'seven_large',
                'large_image_text': 'Rejoignez-nous dès maintenant !',
                'small_image_key': 'seven',
                'small_image_text': "L'efficacité, notre priorité !"
            }
        )

        discord_rpc.update_connection()
        time.sleep(2)
        discord_rpc.run_callbacks()
    discord_rpc.shutdown()