use discord_rpc_client::Client;
use std::time::SystemTime;
use std::{thread, time};

fn main() {
    println!("Le Rich Presence est démarré !");
    let started = SystemTime::now().duration_since(SystemTime::UNIX_EPOCH).unwrap().as_millis() as u64;
    let mut drpc: Client = Client::new(692341410820653076);
    drpc.start();
    drpc.set_activity(|act| act.state("Bot Multifonction")
        .details("Team Anti-Raid")
        .assets(|ast| ast.large_image("seven_large")
            .small_image("seven")
            .large_text("Rejoignez-nous dès maintenant !")
            .small_text("Vous ne serez pas déçu !"))
        .timestamps(|tsp| tsp.start(started))
        .instance(false)
    )
        .expect("Failed to set activity");

    // Pour pas qu'il se ferme instant
    loop {
        thread::sleep(time::Duration::from_secs(60));
    }
}
