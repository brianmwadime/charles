function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.awesa-vereins.tv") ||
        shExpMatch(host, "*.delishandnutri.odoo.mp.ke") ||
        shExpMatch(host, "app.fussballgolf-humboldtsee.de") ||
        shExpMatch(host, "staging.api.clean-it.workstellar.com")) {
        // Test servers.
        return "PROXY 192.168.100.64:8888; DIRECT";
    }

    // All other HTTP traffic, bypass proxy.
    return "DIRECT";
}
