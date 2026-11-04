package com.mra.client;

import net.fabricmc.api.ClientModInitializer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public final class MraClient implements ClientModInitializer {
    private static final Logger LOGGER = LogManager.getLogger("MRA");

    @Override
    public void onInitializeClient() {
        LOGGER.info("MRA client foundation loaded. Competitive features are not enabled.");
    }
}
