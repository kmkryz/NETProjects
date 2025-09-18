using Microsoft.JSInterop;

namespace BlazorLearningApp.Services
{
    public class JavaScriptInteropService
    {
        private readonly IJSRuntime _jsRuntime;

        public JavaScriptInteropService(IJSRuntime jsRuntime)
        {
            _jsRuntime = jsRuntime;
        }

        public async Task ShowAlert(string message)
        {
            await _jsRuntime.InvokeVoidAsync("alert", message);
        }

        public async Task ShowConfirm(string message)
        {
            await _jsRuntime.InvokeVoidAsync("confirm", message);
        }

        public async Task<string> Prompt(string message)
        {
            return await _jsRuntime.InvokeAsync<string>("prompt", message);
        }

        public async Task LogToConsole(string message)
        {
            await _jsRuntime.InvokeVoidAsync("console.log", message);
        }

        public async Task SetTitle(string title)
        {
            await _jsRuntime.InvokeVoidAsync("document.title", title);
        }

        public async Task ScrollToElement(string elementId)
        {
            await _jsRuntime.InvokeVoidAsync("scrollToElement", elementId);
        }

        public async Task AddClass(string elementId, string className)
        {
            await _jsRuntime.InvokeVoidAsync("addClass", elementId, className);
        }

        public async Task RemoveClass(string elementId, string className)
        {
            await _jsRuntime.InvokeVoidAsync("removeClass", elementId, className);
        }

        public async Task SetElementText(string elementId, string text)
        {
            await _jsRuntime.InvokeVoidAsync("setElementText", elementId, text);
        }

        public async Task<double> GetElementWidth(string elementId)
        {
            return await _jsRuntime.InvokeAsync<double>("getElementWidth", elementId);
        }

        public async Task<double> GetElementHeight(string elementId)
        {
            return await _jsRuntime.InvokeAsync<double>("getElementHeight", elementId);
        }

        public async Task PlaySound(string soundFile)
        {
            await _jsRuntime.InvokeVoidAsync("playSound", soundFile);
        }

        public async Task Vibrate(int duration = 200)
        {
            await _jsRuntime.InvokeVoidAsync("vibrate", duration);
        }

        public async Task CopyToClipboard(string text)
        {
            await _jsRuntime.InvokeVoidAsync("copyToClipboard", text);
        }

        public async Task<string> GetClipboardText()
        {
            return await _jsRuntime.InvokeAsync<string>("getClipboardText");
        }
    }
}
